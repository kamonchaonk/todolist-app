export interface Idatas {
	id: string;
	text: string;
	isComplete: boolean;
}

export interface Imodal {
	modalOpen: boolean;
	setModalOpen: (open: boolean) => boolean | void;
	children: React.ReactNode;
}
