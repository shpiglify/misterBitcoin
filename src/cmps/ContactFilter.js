// import React, { Component } from 'react';
import React from 'react';

// export default class ContactFilter extends Component {
//     render() {
//         return (
//             <section>
//                 <h2>Im a Filter</h2>
//                 <input
//                     onChange={ev => this.props.onFilter(ev.target.value)}
//                     type="text"
//                     placeholder="Search"
//                 />
//             </section>
//         )
//     }
// }

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

// without new line of export
// export default ({onFilter}) => (
//     <section>
//         <h2>Im a Filter</h2>
//         <input
//             onChange={ev => onFilter(ev.target.value)}
//             type="text"
//             placeholder="Search"
//         />
//     </section>
// )
// // export default ContactFilter;
