import React from 'react'

const clr1 = {
    stopColor: 'rgb(61, 67, 15)',
    stopOpacity: ' 0.9'
};
const clr2 = {
    stopColor: 'rgb(80, 94, 12)',
    stopOpacity: ' 9'
};
const clr3 = {
    stopColor: 'rgb(139, 175, 3)',
    stopOpacity: ' 0.9'
};
const clr4 = {
    stopColor: 'rgb(232, 17, 8)',
    stopOpacity: ' 0.9'
};
const clr5 = {
    stopColor: 'rgb(160, 24, 14)',
    stopOpacity: ' 0.9'
};
const clr6 = {
    stopColor: 'rgb(131, 17, 11)',
    stopOpacity: '0.9'
};
const grahp = {
    fontSize: '0.7em',
    fontWeight: '600',
    fontFamily: 'Barlow Semi Condensed&quot'
}
const grahp2 = {
    fontSize: '1.4em',
    fontWeight: '600',
    fontFamily: 'Barlow Semi Condensed&quot'
}
const Chart = () => {
    return (
        <>
            <svg width="550.198" height="137.37599999999998">
                <defs>
                    <linearGradient id="graph_green_grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={clr1}></stop>
                        <stop offset="20%" style={clr2}></stop>
                        <stop offset="100%" style={clr3}></stop>
                    </linearGradient>
                    <linearGradient id="graph_red_grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={clr4}></stop>
                        <stop offset="80%" style={clr5} ></stop>
                        <stop offset="100%" style={clr6}></stop>
                    </linearGradient>
                </defs>
                <g className="visx-group" transform="translate(0, 0)">
                    <rect x="0" y="0" width="730.198" height="0.05341802744901" fill="url(#graph_green_grad)"
                        opacity="1"></rect>
                    <rect x="0" y="200.05341802744901" width="730.198" height="83.48258197255096"
                        fill="url(#graph_red_grad)" opacity="1"></rect>
                    <g className="visx-group visx-rows" transform="translate(-5.50198, 0)">
                        <line className="visx-line" x1="0" y1="124.87399901733549" x2="495.1782"
                            y2="124.87399901733549" fill="transparent" shape-rendering="crispEdges"
                            stroke="#fff" strokeWidth="1" opacity="0.44" strokeOpacity="0.5"></line>
                        <line className="visx-line" x1="0" y1="86.08260441790907" x2="495.1782"
                            y2="86.08260441790907" fill="transparent" shape-rendering="crispEdges" stroke="#fff"
                            strokeWidth="1" opacity="0.44" strokeOpacity="0.5"></line>
                        <line className="visx-line" x1="0" y1="47.29120981848262" x2="495.1782"
                            y2="47.29120981848262" fill="transparent" shape-rendering="crispEdges" stroke="#fff"
                            strokeWidth="1" opacity="0.44" strokeOpacity="0.5"></line>
                        <line className="visx-line" x1="0" y1="8.499815219056172" x2="495.1782"
                            y2="8.499815219056172" fill="transparent" shape-rendering="crispEdges" stroke="#fff"
                            strokeWidth="1" opacity="0.44" strokeOpacity="0.5"></line>
                    </g>
                    <g className="visx-group visx-axis visx-axis-right" transform="translate(544.69602, 0)">
                        <g className="visx-group visx-axis-tick" transform="translate(0, 0)"><svg x="-0.25em"
                            y="0.25em" fontSize=".85em" style={{ overflow: "visible;" }}><text transform="" x="8"
                                y="124.87399901733549" fontSize=".85em" font-family="Inconsolata"
                                fill="#868686" text-anchor="end">
                                <tspan x="8" dy="0em">66,070.0000</tspan>
                            </text></svg></g>
                        <g className="visx-group visx-axis-tick" transform="translate(0, 0)"><svg x="-0.25em"
                            y="0.25em" fontSize=".85em" style={{ overflow: "visible;" }}><text transform="" x="8"
                                y="86.08260441790907" fontSize=".85em" font-family="Inconsolata"
                                fill="#868686" text-anchor="end">
                                <tspan x="8" dy="0em">66,080.0000</tspan>
                            </text></svg></g>
                        <g className="visx-group visx-axis-tick" transform="translate(0, 0)"><svg x="-0.25em"
                            y="0.25em" fontSize=".85em" style={{ overflow: "visible;" }}><text transform="" x="8"
                                y="47.29120981848262" fontSize=".85em" font-family="Inconsolata"
                                fill="#868686" text-anchor="end">
                                <tspan x="8" dy="0em">66,090.0000</tspan>
                            </text></svg></g>
                        <g className="visx-group visx-axis-tick" transform="translate(0, 0)"><svg x="-0.25em"
                            y="0.25em" fontSize=".85em" style={{ overflow: "visible;" }}><text transform="" x="8"
                                y="8.499815219056172" fontSize=".85em" font-family="Inconsolata"
                                fill="#868686" text-anchor="end">
                                <tspan x="8" dy="0em">66,100.0000</tspan>
                            </text></svg></g>
                    </g>
                    <line className="visx-annotation-subject visx-annotation-subject-line" x1="434.842477294686"
                        x2="434.842477294686" y1="68.53" y2="137.37599999999998" fill="transparent"
                        pointer-events="none" stroke="#f4d56f" stroke-dasharray="1,3" opacity="0.5"
                        strokeWidth="0.9790000000000001"></line>
                    <line className="visx-annotation-subject visx-annotation-subject-line" x1="541.1609314009661"
                        x2="541.1609314009661" y1="68.53" y2="137.37599999999998" fill="transparent"
                        pointer-events="none" stroke="#f4d56f" stroke-dasharray="1,3" opacity="0.5"
                        strokeWidth="0.9790000000000001"></line>
                    <g className="visx-group visx-glyph" transform="translate(428.96847729468595, 48.95)"><svg
                        viewBox="0 0 13 14" width="17.622" height="16.643">
                        <path opacity="0.8" fill="#f4d56f" fill-rule="evenodd"
                            d="M12.958 6.124 11.281.58c-.047-.161-.1-.344-.283-.394-.185-.05-.325.077-.487.225-.375.342-1.437 1.117-3.209.967l-.24-.79L7.06.58C6.992.372 6.933.192 6.607.134A8.291 8.291 0 0 0 5.161 0C3.439 0 2.029.577.859 1.838l-.067-.222a.406.406 0 0 0-.503-.266.394.394 0 0 0-.272.492l3.609 11.875a.404.404 0 0 0 .503.266.395.395 0 0 0 .272-.492L3.057 9.069c.025-.033.046-.056.068-.08.505-.56 2.055-1.504 4.03-1.721.651-.072.997-.023.997-.023s-.788.039-1.456.259l.138.46c.069.227.18.338.428.424.35.123.809.194 1.323.194 1.333 0 3.045-.482 4.25-1.816.168-.184.205-.376.123-.642zm-4.622.59c-1.004 0-1.908.095-2.712.286-.503.12-1.418.595-2.746 1.426L.992 2.228c.44-.055 1.372-1.105 2.524-1.464C4.9.332 6.506.588 6.688.628l1.648 6.086zm-.741 1.29c.204-.036.483-.112.721-.245.149-.082.264-.179.352-.272l.014-.001.188.624a4.463 4.463 0 0 1-1.275-.105zM7.459 1.87c.252.018.864-.068 1.835-.258.566-.188 1.12-.48 1.538-.862l.006-.006.572 1.892c.11.446.499 1.706 1.164 3.78-.658.502-1.165.846-1.522 1.03-.319.164-.867.347-1.645.55L7.459 1.87z">
                        </path>
                    </svg></g>
                    <g className="visx-group visx-glyph" transform="translate(535.2869314009661, 48.95)"><svg
                        viewBox="0 0 13 14" width="17.622" height="16.643">
                        <path opacity="0.8" fill="#f4d56f" fill-rule="evenodd"
                            d="M12.958 6.124 11.281.58c-.047-.161-.1-.344-.283-.394-.185-.05-.325.077-.487.225-.375.342-1.437 1.117-3.209.967l-.24-.79L7.06.58C6.992.372 6.933.192 6.607.134A8.291 8.291 0 0 0 5.161 0C3.439 0 2.029.577.859 1.838l-.067-.222a.406.406 0 0 0-.503-.266.394.394 0 0 0-.272.492l3.609 11.875a.404.404 0 0 0 .503.266.395.395 0 0 0 .272-.492L3.057 9.069c.025-.033.046-.056.068-.08.505-.56 2.055-1.504 4.03-1.721.651-.072.997-.023.997-.023s-.788.039-1.456.259l.138.46c.069.227.18.338.428.424.35.123.809.194 1.323.194 1.333 0 3.045-.482 4.25-1.816.168-.184.205-.376.123-.642zM4.536.498l.6 1.936.013-.002a8.497 8.497 0 0 0-1.214.246 4.318 4.318 0 0 0-1.015.435l.01-.007-.593-1.872A5.48 5.48 0 0 1 4.536.498zM2.282 6.52l-.706-2.323a6.095 6.095 0 0 1 1.339-1.082l.763 2.378h.001c-.717.352-1.149.738-1.397 1.027zm3.596-1.698.646 2.08a8.335 8.335 0 0 0-2.18.657l-.657-2.07c.267-.13.572-.257.922-.37a7.392 7.392 0 0 1 1.3-.305l-.75-2.384c.969-.12 1.655-.02 1.987.053l.74 2.436c-.383-.11-1.064-.228-2.008-.097zm1.717 3.182c.204-.037.483-.113.721-.246.149-.082.264-.179.352-.272l.014-.001.188.624a4.463 4.463 0 0 1-1.275-.105zM9.73 5.977c-.485.114-.772.127-1 .105L8.048 3.83c.378.027.813.021 1.28-.097.22-.055.419-.117.6-.184l-.591-1.94a4.138 4.138 0 0 0 1.496-.86c.002 0 .004-.003.006-.005l.572 1.892c-.24.251-.63.595-1.514.926l.66 2.143a4.71 4.71 0 0 1-.825.272zm2.752.484a4.85 4.85 0 0 1-1.353 1.047l-.547-1.8c.79-.351 1.226-.758 1.448-1.022l.475 1.57c.041.134.02.158-.023.205z">
                        </path>
                    </svg></g>
                    <path className="visx-linepath"
                        d="M-0.354394847020934,56.01539446387872L8.151081481481482,55.394732150330796L15.23897842190016,55.355940755695244L23.744454750402575,55.41412784759213L32.24993107890499,59.02560668478653L39.33782801932367,53.84307636631988L47.843304347826084,58.571747367979576L56.3487806763285,54.72752016319763L63.43667761674718,34.028432004960386L71.9421539452496,35.940847758664255L79.03005088566827,31.883267883612564L87.53552721417068,31.755256281394264L96.0410035426731,37.08907303881539L103.12890048309178,37.60111944751925L111.63437681159421,33.50474817783201L120.13985314009662,37.527415797779426L127.22775008051529,38.729949030409074L135.7332264090177,34.121531351961536L142.8211233494364,34.12541049143638L151.3265996779388,39.68033819807695L159.8320760064412,47.7838605298687L166.9199729468599,41.47637976804349L175.4254492753623,50.93372177136288L183.93092560386475,50.71576262296323L191.0188225442834,50.7164899616183L199.52429887278583,47.14768165847784L206.61219581320452,53.45516242035948L215.11767214170692,61.11646285371233L223.62314847020932,77.04033033676107L230.711045410628,91.8508847948194L239.21652173913043,90.8151545590436L247.72199806763282,98.57731261840372L254.8098950080515,100.78842211054169L263.31537133655394,100.78454297106684L270.4032682769726,97.00238199765663L278.908744605475,95.82312360181962L287.41422093397745,95.81075884479647L294.5021178743961,86.0050216286944L303.00759420289853,89.2790153328756L311.51307053140096,89.28289447235046L318.6009674718196,89.27125705398235L327.1064438003221,89.2790153328756L334.1943407407407,89.25574049613942L342.6998170692432,93.06505544581711L351.20529339774555,89.28289447235046L358.29319033816427,93.09220942202812L366.79866666666663,93.05341802744901"
                        fill="transparent" stroke-linecap="round" stroke="#f4d56f"
                        strokeWidth="1.9580000000000002"></path>
                    <line className="visx-annotation-subject visx-annotation-subject-line" x1="0" x2="550.198"
                        y1="93.05341802744901" y2="93.05341802744901" fill="transparent" pointer-events="none"
                        stroke="#f4d56f"></line>
                    <circle className="visx-annotation-subject visx-annotation-subject-circle"
                        cx="366.79866666666663" cy="93.05341802744901" r="2.4475" fill="#f4d56f"
                        pointer-events="none" stroke="#222" strokeWidth="0"></circle>
                    <g className="visx-group visx-annotationlabel"
                        transform="translate(451.31899999999996, 81.30541802744901)" pointer-events="none"
                        opacity="1">
                        <rect className="visx-annotationlabel-background" fill="#151513" x="0" y="0" width="120.9"
                            height="1.8em" stroke="#f4d56f" rx="3.1328000000000005" ry="3.1328000000000005">
                        </rect><svg x="0" y="-.40em" style={{ overflow: "visible;" }}><text transform=""
                            fill="#f4d56f" x="49.439499999999995" y="0.29369999999999996"
                            font-family="Barlow Semi Condensed" text-anchor="middle"
                            style={grahp2}
                        >
                            <tspan x="60.439499999999995" dy="1.4em">66,078.2030</tspan>
                        </text></svg>
                    </g>
                    <g className="visx-group visx-annotationlabel"
                        transform="translate(453.7665, 69.55741802744902)" pointer-events="none" opacity="1">
                        <rect className="visx-annotationlabel-background" fill="#f4d56f" x=".7em" y="0" width="93.005"
                            height="1.1em" stroke="#f4d56f" rx="3.4265" ry="2.937"></rect><svg x="0" y=".25em"
                                style={{ overflow: "visible;" }}><text transform="" fill="#000" x="46.50249999999999"
                                    y="0.19580000000000003" font-family="Barlow Semi Condensed"
                                    letter-spacing="-.03em" opacity="1" text-anchor="middle"
                                    style={grahp}
                                >
                                <tspan x="58.50249999999999" dy="0.7em" >LIVE BITCOIN</tspan>
                            </text></svg>
                    </g>
                </g>


            </svg>
        </>
    )
}

export default Chart