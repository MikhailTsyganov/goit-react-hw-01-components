import s from './StatisticsNext.module.css';
import PropTypes from 'prop-types';

export default function StatisticsNext({title = 'Upload stats', stats}) {
    return  <section className={s.statistics}>
        <h2 className={s.title}>{title}</h2>

                <ul className={s.statList}>
                    {stats.map(stat => (
                        <li key={stat.id} className={s.item}>
                            <span className={s.label}>{stat.label}</span>
                            <span className={s.percentage}>{stat.percentage}%</span>
                        </li>      
                    ))}
                </ul>
            </section>
}