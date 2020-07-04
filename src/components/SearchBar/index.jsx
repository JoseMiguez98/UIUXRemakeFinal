import React from 'react';

const SearchBar = () => (
    <div className="search-wrapper">
        <div className="search-wrapper__filters-dropdown">
                <a href="#" className="search-wrapper__filters-dropdown__actual-filter" role="button">
                    All
                    <svg version="1.1" id="Capa_3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15px" height="15px"  fill="#aaa" stroke="#aaa" strokeWidth="50px" viewBox="0 0 612 612" enableBackground="new 0 0 612 612">
                        <g id="_x39__30_">
                            <g>
                                <path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
                                    L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
                                    c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
                            </g>
                        </g>
                    </svg>
                </a>
        </div>
        <input className="search-input" type="text" placeholder="Busca tus juegos favoritos aqui..."/>
        <div className="search-icon-wrapper">
            <a href="#" className="search-icon" role="button">
                <svg version="1.1" id="Capa_4" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="#aaa" x="0px" y="0px" viewBox="0 0 511.999 511.999" enableBackground="new 0 0 511.999 511.999;">
                    <g>
                    	<g>
                    		<path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
                    			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
                    			c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
                    			c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/>
                    	</g>
                    </g>
                </svg>
            </a>
        </div>
    </div>
);

export default SearchBar;
