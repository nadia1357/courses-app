import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { v4 as uuidv4 } from 'uuid';

import './Authors.css';
import { BUTTON_TEXT, CREATE_COURSE_MODEL } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';
import { getAuthors } from '../../../../selectors';

const Authors = ({ addAllAuthors }) => {
	const authorsFromState = useSelector(getAuthors);
	const chosenAuthors = [];
	let showChosenAuthors = false;

	const addAuthorToList = (author) => {
		chosenAuthors.push(author);
		showChosenAuthors = true;
		addAllAuthors(author);
	};

	return (
		<div className='allAuthorsBlock'>
			<h4>{CREATE_COURSE_MODEL.authors}</h4>
			<ul className='allAuthorsList'>
				{authorsFromState.map((author) => (
					<li className='authorItem' key={author.id}>
						<div className='author'>
							<p>{author.name}</p>
							<Button
								text={BUTTON_TEXT.addAuthor}
								onclick={addAuthorToList(author)}
							/>
						</div>
					</li>
				))}
			</ul>
			<h4>{CREATE_COURSE_MODEL.courseAuthors}</h4>
			{!showChosenAuthors && <p>{CREATE_COURSE_MODEL.authorsListEmpty}</p>}
			{showChosenAuthors && (
				<ul className='chosenAuthorsList'>
					{chosenAuthors.map((author) => (
						<li className='authorItem' key={author.id}>
							{author.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export { Authors };
