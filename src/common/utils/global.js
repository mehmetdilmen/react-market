export default function filterToUnique(e, setCheckData, checkData) {
  let checkFiltered = [];
  if (e?.target?.checked) {
    if (checkData?.length) {
      checkData?.filter((item) => {
        if (item?.name !== e?.target?.value) {
          setCheckData([...checkData, { name: e.target.value }]);
          checkFiltered = [...checkData, { name: e.target.value }];
        }
      });
    } else {
      setCheckData([...checkData, { name: e.target.value }]);
      checkFiltered = [...checkData, { name: e.target.value }];
    }
  } else {
    checkFiltered = checkData.filter((item) => item.name !== e.target.value);

    setCheckData(checkFiltered);

    return checkFiltered;
  }
}
