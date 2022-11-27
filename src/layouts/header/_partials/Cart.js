import React from "react";
import { useSelector } from "react-redux";

import { Image } from 'antd';

import "../../../assets/styles/_headerCartStyles.scss";

function Cart() {
  const totalPriceState = useSelector((state) => state?.cart);

  return (
    <div className="header-cart-container">
      <div className="icon-cart">
        <Image
          width={24}
          height={24}
          src="error"
          preview={false}
          className="cart"
          fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCxsPJTQ+GtDfAAABW0lEQVRYw+1WTarCMBj8EgpdaIT6s+paNx7AC3gAoXgL7dL76FUUrCvdVNwV3CoI6lK+eYugj0dbzOM1io8OlJakzEwmQwjRpwHsuuAwBEcR+HrVTxQB4zHYde2Kw/eBzQZ54PUa8H17K3+I7/dAEICVAisFDAbAbvcwYSMJcBh+i9fr6XQ8T88B4NHIQvyrlTYQBPkmh0NtYLm0YOBy0eRK5Ruo1bTJ89mU18kncxyibpeo1dIj1ap+93rgZ7RKgft9/X04EMWxkLeb+Wq50wG2WxSGOAa327+Ie7EoTvyO+TxLS2TtI4nTiUhKY8dGYCZ4npA/+5EWEc1m8eJERFKSaDRSo+n872WzgAzujAQsGhAmBsoEygTo3QlQpWIvgTR32YHXdoA+wsC/7sDbt8CshBbPAbMEjkd7BtLcGSWczewZmE6f/gJICUwmQJIUdyFNEs1p46r3R3wBG57RU1UiywEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTEtMjdUMTU6Mzc6NTIrMDA6MDCd7UyOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTExLTI3VDE1OjM3OjUyKzAwOjAw7LD0MgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMi0xMS0yN1QxNTozNzo1MiswMDowMLul1e0AAAAASUVORK5CYII="
        />
      </div>
      <div className="cart-counter">
        <span className="price">₺ {totalPriceState.totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Cart;
