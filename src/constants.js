const MOCKED_COURSES_LIST = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		creationDate: '8.3.2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
		creationDate: '10.11.2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

const MOCKED_AUTHORS_LIST = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

const BUTTON_TEXT = {
	logout: 'Logout',
	search: 'Search',
	addNewCourse: 'Add new course',
	showCourse: 'Show course',
	createCourse: 'Create course',
	updateCourse: 'Update course',
	createAuthor: 'Create author',
	addAuthor: 'Add author',
	deleteAuthor: 'Delete author',
	register: 'Register',
	login: 'Login',
	backToCourses: '< Back to courses',
};

const INPUT_TEXT = {
	enterCourseName: 'Enter course name or id...',
	enterTitle: 'Enter title...',
	enterDescription: 'Enter description',
	enterAuthorName: 'Enter author name...',
	enterDuration: 'Enter duration in minutes...',
	enterName: 'Enter name',
	enterEmail: 'Enter email',
	enterPassword: 'Enter password',
};

const CREATE_COURSE_MODEL = {
	title: 'Title',
	description: 'Description',
	addAuthor: 'Add author',
	deleteAuthor: 'Delete author',
	authorName: 'Author name',
	authors: 'Authors',
	duration: 'Duration',
	courseAuthors: 'Course authors',
	authorsListEmpty: 'Authors list is empty',
};

const COURSE_CARD_MODEL = {
	id: 'Id',
	authors: 'Authors',
	duration: 'Duration',
	created: 'Created',
};

export {
	MOCKED_COURSES_LIST,
	MOCKED_AUTHORS_LIST,
	BUTTON_TEXT,
	INPUT_TEXT,
	CREATE_COURSE_MODEL,
	COURSE_CARD_MODEL,
};
