import './Item.css'

export default function item(props) {
  const {id,title,description} = props
  return (
    <section>
      <div className="content">
        <h4>{title}</h4>
        <button>show</button>
      </div>
        <p>{description}</p>
    </section>
  );
}
