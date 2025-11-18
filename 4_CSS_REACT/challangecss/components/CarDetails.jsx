import styles from "./CarDetails.module.css"

const CarDetails = ({brand, name, year, maxSpd}) => {
  return (
    <div>
        <ul>
            <li className={styles.my_list}>{brand} - {name} {year}. Vel máx: {maxSpd}km/h</li>
        </ul>
    </div>
  )
}

export default CarDetails