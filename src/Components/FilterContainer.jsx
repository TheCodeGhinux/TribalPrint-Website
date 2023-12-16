import { search } from "../Assets";
import { FilterItems } from "../Constants";
import styles from "../style";

const FilterContainer = ({setSearchTerm, searchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
    return ( 

        <div className="filter-container hidden md:block mb-[76px]">
        <h2 className={`${styles.heading2} mb-[22px]`}>Filter</h2>
          <div className="searchbox bg-white py-[12px] px-[16px] mb-[16px] flex   flex-row items-center  w-full  rounded-[4px] gap-[16px] ">
            <input
              type="text"
              className=" outline-none text-gray  w-full  "
              placeholder="Search product"
              value={searchTerm}
              onChange={handleSearch}
            />
            <img src={search} alt="" className="w-[24px]  h-[24px] " />
          </div>
          <div className="items flex flex-col gap-4 ">
            {FilterItems.map((filte, index) => (
              <div
                className="flex flex-row gap-4 items-center "
                key={index.id}
              >
                <input type="checkbox" className="w-[30px] " />
                <label className="font-nunito leading-[24px] text-black ">
                  {filte.name}
                </label>
              </div>
            ))}
          </div>
        </div>
     );
}
 
export default FilterContainer;