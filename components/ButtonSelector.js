/**
 * Author: Wilson Pilco Nuñez
 * Email: wilsonaux1@gmail.com
 * Created at: 2022-08-30 22:19
 */

function ButtonSelector(props) {
  return (
    <button className={"nav-link " + (props.currentType === props.targetType ? "active" : "")}>
      {props.children}
    </button>
  )
}

export default ButtonSelector;
