export interface Lists {
	// date : Date,
	info: {
		isPass: boolean;
		title: string;
		details: string;
	};
	pass: number;
	notPass: number;
}

export interface Imsg {
	msg: string;
	notiType: string;
	title: string;
}

export interface Idatas {
	id: string;
	text: string;
}

export interface Imodal {
	modalOpen: boolean;
	setModalOpen: (open: boolean) => boolean | void;
	children: React.ReactNode;
}
