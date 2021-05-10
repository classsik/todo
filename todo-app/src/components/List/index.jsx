import React from "react";
import "./List.scss";
import classNames from "classnames";

import removeSvg from "../../assets/img/remove.svg";
import Badge from "../Badge";

export default function List({ items, isRemovable, onClick, onRemove }) {
  const removeList = (item) => {
    if (window.confirm("Вы действительно хотите удалить раздел?")) {
      onRemove(item);
    }
  };

  return (
    <ul className="list" onClick={onClick}>
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              src={removeSvg}
              alt="Remove icon"
              className="list__remove-icon"
              onClick={() => removeList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
