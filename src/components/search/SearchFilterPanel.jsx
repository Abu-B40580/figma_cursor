import { useEffect, useRef, useState } from 'react';
import { categoriesByRegion, itemsByCategory, regions } from '../../data/searchFilters.js';

function Column({ title, options, selected, onSelect }) {
  if (!options || options.length === 0) return null;

  return (
    <div className="flex-1 border-r border-[#f1e2c4] last:border-none">
      <div className="px-4 py-3 text-xs font-semibold text-[#b08446]">{title}</div>
      <div className="space-y-0.5 px-2 pb-3 text-xs">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-left transition ${
              selected === option
                ? 'bg-[#f4d9a3] font-semibold text-[#8a5a24]'
                : 'text-[#6b5540] hover:bg-[#f7ecd5]'
            }`}
          >
            <span>{option}</span>
            <span className="text-[10px] text-[#c19b66]">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SearchFilterPanel({ active, onActiveChange }) {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    const handleClick = (event) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(event.target)) {
        onActiveChange(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [active, onActiveChange]);

  if (!active) return null;

  const regionOptions = regions.slice(1);
  const categoryOptions = selectedRegion ? categoriesByRegion[selectedRegion] || [] : [];
  const itemOptions = selectedCategory ? itemsByCategory[selectedCategory] || [] : [];

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setSelectedCategory(null);
    setSelectedItem(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedItem(null);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    // eslint-disable-next-line no-console
    console.log('filter', { region: selectedRegion, category: selectedCategory, item });
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 top-[72%] z-20 flex justify-center md:top-[70%]">
      <div
        ref={panelRef}
        className="pointer-events-auto mx-4 flex w-full max-w-3xl rounded-[2rem] bg-[#fff9ea] shadow-card"
      >
        <Column
          title="所有地區"
          options={regionOptions}
          selected={selectedRegion}
          onSelect={handleRegionSelect}
        />
        {selectedRegion && (
          <Column
            title="所有種類"
            options={categoryOptions}
            selected={selectedCategory}
            onSelect={handleCategorySelect}
          />
        )}
        {selectedCategory && (
          <Column
            title="所有項目"
            options={itemOptions}
            selected={selectedItem}
            onSelect={handleItemSelect}
          />
        )}
      </div>
    </div>
  );
}

export default SearchFilterPanel;

