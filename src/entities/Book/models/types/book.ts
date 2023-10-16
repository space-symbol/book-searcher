export interface Book {
	etag: string;
	id: string;
	volumeInfo: {
		title?: string;
		description?: string;
		authors?: string[];
		categories?: string[];
		imageLinks?: {
			smallThumbnail?: string;
			thumbnail?: string;
		};
	}
}

