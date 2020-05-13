import createComponentCard from '../utils/create-component-card';

// map card names to component names
export const CARD_COMPONENT_MAP = {
    hr: 'koenig-card-hr',
    image: 'koenig-card-image',
    markdown: 'koenig-card-markdown',
    'card-markdown': 'koenig-card-markdown', // backwards-compat with markdown editor
    html: 'koenig-card-html',
    code: 'koenig-card-code',
    embed: 'koenig-card-embed',
    /* LLIUREX Hide option  
    bookmark: 'koenig-card-bookmark',
     LLIUREX */	
    gallery: 'koenig-card-gallery',
// LLIUREX Add option to publish local video 	
    video: 'koenig-card-video'		
// LLIUREX	
};

// map card names to generic icons (used for ghost elements when dragging)
export const CARD_ICON_MAP = {
    hr: 'koenig/kg-card-type-divider',
    image: 'koenig/kg-card-type-image',
    markdown: 'koenig/kg-card-type-markdown',
    'card-markdown': 'koenig/kg-card-type-markdown',
    html: 'koenig/kg-card-type-html',
    code: 'koenig/kg-card-type-gen-embed',
    embed: 'koenig/kg-card-type-gen-embed',
/* LLIUREX Hide option  
    bookmark: 'koenig/kg-card-type-bookmark',
  LLIUREX Hide option  */
    gallery: 'koenig/kg-card-type-gallery',
// LLIUREX Add option to publish local video 	
    video: 'koenig/kg-card-type-video'
// LLIUREX  	
	
};

// TODO: move koenigOptions directly into cards now that card components register
// themselves so that they are available on card.component
export default [
    createComponentCard('card-markdown'), // backwards-compat with markdown editor
    createComponentCard('code', {deleteIfEmpty: 'payload.code'}),
    createComponentCard('embed', {hasEditMode: false, deleteIfEmpty: 'payload.html'}),
 /* LLIUREX Hide option    
    createComponentCard('bookmark', {hasEditMode: false, deleteIfEmpty: 'payload.metadata'}),
  LLIUREX Hide option */  
    createComponentCard('hr', {hasEditMode: false, selectAfterInsert: false}),
    createComponentCard('html', {deleteIfEmpty: 'payload.html'}),
    createComponentCard('image', {hasEditMode: false, deleteIfEmpty(card) {
        return card.payload.imageSelector && !card.payload.src;
    }}),
    createComponentCard('markdown', {deleteIfEmpty: 'payload.markdown'}),
    createComponentCard('gallery', {hasEditMode: false}),
    // LLIUREX Add option to publish local video 	
    createComponentCard('video', {hasEditMode: false, deleteIfEmpty(card) {
        return card.payload.imageSelector && !card.payload.src;
    }}),
    // LLIUREX  	
	
];

export const CARD_MENU = [
    {
        title: 'Primary',
        items: [{
            label: 'Image',
            icon: 'koenig/kg-card-type-image',
            iconClass: 'kg-card-type-native',
            matches: ['image', 'img'],
            type: 'card',
            replaceArg: 'image',
            params: ['src'],
            payload: {
                triggerBrowse: true
            }
        },
        {
            label: 'Markdown',
            icon: 'koenig/kg-card-type-markdown',
            iconClass: 'kg-card-type-native',
            matches: ['markdown', 'md'],
            type: 'card',
            replaceArg: 'markdown'
        },
        {
            label: 'HTML',
            icon: 'koenig/kg-card-type-html',
            iconClass: 'kg-card-type-native',
            matches: ['html'],
            type: 'card',
            replaceArg: 'html'
        },
        {
            label: 'Gallery',
            icon: 'koenig/kg-card-type-gallery',
            iconClass: 'kg-card-type-native',
            matches: ['gallery'],
            type: 'card',
            replaceArg: 'gallery'
        },
	// LLIUREX Add option to publish local video 	
	 {
            label: 'Video',
            icon: 'koenig/kg-card-type-video',
            iconClass: 'kg-card-type-native',
            matches: ['video'],
            type: 'card',
            replaceArg: 'video',
            params: ['src'],
            payload: {
                triggerBrowse: true
            }
	// LLIUREX 	
	    
        },
        {
            label: 'Divider',
            icon: 'koenig/kg-card-type-divider',
            iconClass: 'kg-card-type-native',
            matches: ['divider', 'horizontal-rule', 'hr'],
            type: 'card',
            replaceArg: 'hr'
        }
	/* LLIUREX Hide option ,
        {
            label: 'Bookmark',
            icon: 'koenig/kg-card-type-bookmark',
            matches: ['bookmark'],
            type: 'card',
            replaceArg: 'bookmark',
            params: ['url']
        }
	LLIUREX Hide option */
	]
    },
    {
        title: 'Embed',
        items: [{
            label: 'YouTube',
            icon: 'koenig/kg-card-type-youtube',
            matches: ['youtube'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Twitter',
            icon: 'koenig/kg-card-type-twitter',
            matches: ['twitter'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Instagram',
            icon: 'koenig/kg-card-type-instagram',
            matches: ['instagram'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Unsplash',
            icon: 'koenig/kg-card-type-unsplash',
            iconClass: 'kg-card-type-unsplash',
            matches: ['unsplash'],
            type: 'card',
            replaceArg: 'image',
            params: ['searchTerm'],
            payload: {
                imageSelector: 'unsplash'
            }
        }
	
	/* LLIUREX Hide option 
	,
	
	{
            label: 'Vimeo',
            icon: 'koenig/kg-card-type-vimeo',
            matches: ['vimeo'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'CodePen',
            icon: 'koenig/kg-card-type-codepen',
            iconClass: 'kg-card-type-codepen',
            matches: ['codepen'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Spotify',
            icon: 'koenig/kg-card-type-spotify',
            matches: ['spotify'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'SoundCloud',
            icon: 'koenig/kg-card-type-soundcloud',
            matches: ['soundcloud'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Other...',
            icon: 'koenig/kg-card-type-other',
            iconClass: 'kg-card-type-native',
            matches: ['embed'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        }
	LLIUREX Hide option */
	]
    }
];
