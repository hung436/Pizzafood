import { Select } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProvinceList } from "../../app/Reducer/addressSlice";
import { dispatch } from "../../app/Store/store";
function Address({ value, onChange }) {
  const { provinces } = useSelector((state) => state.address);
  useEffect(() => {
    dispatch(getProvinceList());
  }, []);

  return (
    <div className='flex flex-col space-y-4 w-full'>
      <Select
        showSearch
        placeholder='--Nhập Tỉnh/ Thành phố--'
        optionFilterProp='children'
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        // options={()=>provinces.map((province) =>   {
        //   value: province.provinceID,
        //   label: province.name,
        // })}
      />
      <Select
        showSearch
        style={{}}
        placeholder='--Nhập Quận/ Huyện--'
        optionFilterProp='children'
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[]}
        disabled='true'
      />
      <Select
        showSearch
        style={{}}
        placeholder='--Nhập Phường/ Xã--'
        optionFilterProp='children'
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[]}
      />
    </div>
  );
}

export default Address;
