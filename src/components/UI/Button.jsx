export default function Button({children, textOnly, onClick, className, ...props}) {
  let cssClass = textOnly ? 'text-button' : 'button';
  cssClass += ' ' + {className};
  return (
    <button className = {cssClass} {...props}>{children}</button>
  )
}