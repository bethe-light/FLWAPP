export default {
	/* data,headers 里面填key用于在ajax.js里面验证是否有该字段 */
	/* 如果你要用 resetful的风格的api ，请将method改为'get_restful'(大小写不敏感),然后data里面填{value：***} (key一定要是value） */
	Test: {url: '/test', method: 'get', data: {}, headers: {}},
	UserInviteCodeCheck: {url: '/verify/invite', method: 'post', data: {code: ''}, headers: {}},
	StudentCenter: {url: '/stu/center', method: 'get', data: {}, headers: {}},
	TutorCenter: {url: '/tutor/center', method: 'get', data: {}, headers: {}},
	StudentProfile: {url: '/stu/profile', method: 'get', data: {}, headers: {}},
	TutorProfile: {url: '/tutor/profile', method: 'get', data: {}, headers: {}},
	UserLogin: {url: '/user/login', method: 'post', data: {code: ''}, headers: {}},
	UserVerifyCode: {url: '/verify/captcha', method: 'get', data: {phone: 0}, headers: {}},
	UserVerifyCodeCheck: {url: '/verify/captcha', method: 'post', data: {phone: 0, captcha: 0}, headers: {}},
	UserRegister: {url: '/user/register', method: 'post', data: {phone: 0, code: 0}, headers: {}},
	SendStudentProfile: {url: '/stu/profile', method: 'put', data: {}, headers: {}},
	SendTutorProfile: {url: '/tutor/profile', method: 'put', data: {}, headers: {}},
	UpLoad: {url: '/oss/up', method: 'get_restful', data: {}, headers: {}},
	DownLoad: {url: '/oss/down', method: 'get_restful', data: {}, headers: {}},
	GetStuHomePage: {url: '/stu/home', method: 'get', data: {}, headers: {}},
	GetMentorHomePage: {url: '/tutor/home', method: 'get', data: {}, headers: {}},
	GetStudentRecord: { url: '/stu/trace', method: 'get', data: {}, headers: {} },
	GetTutorRecord: { url: '/tutor/trace', method: 'get', data: {}, headers: {} },
	GetTutorStudents: { url: '/tutor/students', method: 'get', data: {}, headers: {} },
	GetStudentTutors: { url: '/stu/tutors', method: 'get', data: {}, headers: {} },
	PostUserImagesName: { url: '/oss/down', method: 'post', data: {}, headers: {} },
	GetTutorRedFlower: { url: '/tutor/summary', method: 'get', data: {}, headers: {} },
	GetStuRedFlower: { url: '/stu/summary', method: 'get', data: {}, headers: {} },
	GetTutorTime: { url: '/tutor/voluntary', method: 'get', data: {}, headers: {} },
	GetStudentTime: { url: '/stu/voluntary', method: 'get', data: {}, headers: {} },
	GetSchoolList: { url: '/conf/school', method: 'get', data: {}, headers: {} },
	GetDirection: { url: '/conf/direction', method: 'get', data: {}, headers: {} },
	GetTrade: { url: '/conf/trade', method: 'get', data: {}, headers: {} },
	GetNewsList: { url: '/article/list', method: 'get', data: {}, headers: {} },
	GetFlowerRank: { url: '/rank', method: 'get', data: {}, headers: {} },
	GetArticle: { url: '/article', method: 'get_restful', data: {}, headers: {} },
	GetBanner: { url: '/banner', method: 'get', data: {}, headers: {} },
	PostArticle: { url: '/article', method: 'post', data: {title: '', content: ''}, headers: {} },
	GetSearchStudentList: { url: '/search/student', method: 'get', data: {}, headers: {} },
	GetSearchTutorList: { url: '/search/tutor', method: 'get', data: {}, headers: {} },
	PostWithdrawAmount: { url: '/stu/withdraw', method: 'post', data: {}, headers: {} },
	GetWithdrawInfo: { url: '/stu/withdraw', method: 'get', data: {}, headers: {} },
	PostStuActivity: { url: '/stu/campaign', method: 'post', data: {}, headers: {} },
	PostTutorActivity: { url: '/tutor/campaign', method: 'post', data: {}, headers: {} }
}
