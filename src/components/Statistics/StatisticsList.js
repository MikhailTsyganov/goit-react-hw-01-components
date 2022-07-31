import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from './StatisticsList.module.css';

export default function StatisticsList({ items }) {

   return   <section className={s.statistics}>
                <h2 className={s.title}>Upload stats</h2>

                <ul className={s.statList}>
           {items.map(item => (
                    <Statistics key={item.id} label={item.label} percentage={item.percentage}/>         
                    ))}
                </ul>
            </section>
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape)
}