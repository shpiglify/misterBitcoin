import React from 'react';
import './ContactFilter.scss'

const ContactFilter = ({ onFilter }) => (
	<section className="filter-container">
		<input
			onChange={ev => onFilter(ev.target.value)}
			type="text"
			placeholder="Search"
		/>
	</section>
)

export default ContactFilter;
