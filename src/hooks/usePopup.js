import { useState } from 'react';

function usePopup(params) {
  const [btnState, setBtnState] = useState(false);

  const handleBtnClick = (e) => {
    setBtnState((prev) => !prev);
  };

  return [btnState, handleBtnClick];
}

export default usePopup;
