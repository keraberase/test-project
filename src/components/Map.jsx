import {ComposableMap, Geographies, Geography, Marker, Line} from '../components/Line';
import geoUrl from "../geoJSON/Ukraine.json";
import React from "react";
import {useTranslation} from "react-i18next";

const Map = () => {
    const {t} = useTranslation();

    const flightDestinations = [
        {
            from: {coord: [22.292754566059685, 48.61141438652128], city: "Uzhhorod"},
            to: {coord: [30.610073906378048, 50.46607409412448], city: "Kyiv"},
            width: 2
        },
        {
            from: {coord: [22.292754566059685, 48.61141438652128], city: "Uzhhorod"},
            to: {coord: [30.128043280387608, 49.788024316713], name: "Bila Tserkva"},
            width: 2
        },
        {
            from: {coord: [22.292754566059685, 48.61141438652128], city: "Uzhhorod"},
            to: {name: "Kropyvnytskyi", coord: [32.236775446294494, 48.51902890628777]},
            width: 2
        },
        {
            from: {coord: [22.292754566059685, 48.61141438652128], city: "Uzhhorod"},
            to: {name: "Rakhiv", coord: [24.20239751684332, 48.053121946557006]},
            width: 1
        },
        {
            from: {coord: [22.292754566059685, 48.61141438652128], city: "Uzhhorod"},
            to: {name: "Ivano-Frankivsk", coord: [24.712452308901177, 48.91689165306165]},
            width: 1
        },
        {
            from: {coord: [22.292754566059685, 48.61141438652128], city: "Uzhhorod"},
            to: {name: "Zhovti Vody", coord: [33.50571040726277, 48.341116839229336]},
            width: 2
        },
        {
            from: {name: "Lviv", coord: [24.034266802070974, 49.84101254218815]},
            to: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            width: 2
        },
        {
            from: {name: "Lviv", coord: [24.034266802070974, 49.84101254218815]},
            to: {name: "Kropyvnytskyi", coord: [32.236775446294494, 48.51902890628777]},
            width: 2
        },
        {
            from: {name: "Rivne", coord: [26.24857166794391, 50.61689835749657]},
            to: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            width: 2
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Chernihiv", coord: [31.260221727508824, 51.49441204206042]},
            width: 2
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Kharkiv", coord: [36.26421543857359, 49.9865161561984]},
            width: 2
        },
        {
            from: {name: "Zhovti Vody", coord: [33.50571040726277, 48.341116839229336]},
            to: {name: "Zaporizhzhia", coord: [35.08093803651404, 47.82992337478532]},
            width: 2
        },
        {
            from: {name: "Rivne", coord: [26.24857166794391, 50.61689835749657]},
            to: {name: "Borodianka", coord: [29.915415079239505, 50.644414416806704]},
            width: 2
        },
        {
            from: {name: "Lviv", coord: [24.034266802070974, 49.84101254218815]},
            to: {name: "Dnipro", coord: [34.96432899932629, 48.47650767170614]},
            width: 2
        },
        {
            from: {coord: [22.292754566059685, 48.61141438652128], city: "Uzhhorod"},
            to: {name: "Uman", coord: [30.222129709714842, 48.739938944519]},
            width: 2
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Brovary", coord: [30.80943885491954, 50.51736687652111]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Hlevakha",
                coord: [30.30076877812614, 50.258826464985376]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Boryspil",
                coord: [30.959750111715095, 50.356889114110075]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Ukrainka",
                coord: [30.742465576941445, 50.13824843303133]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Vyshhorod",
                coord: [30.485167230571285, 50.60660795110132]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Nemishajeve",
                coord: [30.091116691777433, 50.56598962518502]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Krasylivka",
                coord: [30.9070026337559, 50.52240806189084]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Zazymie",
                coord: [30.678510929085917, 50.573870120821425]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Rohoziv",
                coord: [31.051791952750637, 50.234557771921416]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Ivankovychi",
                coord: [30.422519382072586, 50.27618612536]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Rozvazhiv",
                coord: [29.652703009354386, 50.92617811753054]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Kukhari",
                coord: [29.59129934907143, 50.81913177939115]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Sukachi",
                coord: [29.930114255505647, 50.961022071560144]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Borodyanka",
                coord: [29.918502669983997, 50.64531753753848]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Makariv",
                coord: [29.805496256049555, 50.46102994330686]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Obukhiv",
                coord: [30.623385576571046, 50.11644617166146]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Lypivka",
                coord: [29.811204791851726, 50.51041295391686]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Vablya",
                coord: [29.868635697467898, 50.592917217276735]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Andriivka",
                coord: [29.834013869844693, 50.55063209621665]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Nove Zalissya",
                coord: [29.967067326763097, 50.691959072996774]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Berestyanka",
                coord: [29.993446311053162, 50.69138447982739]},
            width: 1
        },
        {
            from: {name: "Kyiv", coord: [30.610073906378048, 50.46607409412448]},
            to: {name: "Shybene",
                coord: [30.010968585906372, 50.73069631536426]},
            width: 1
        },
        {
            from: {name: "Rivne", coord: [26.24857166794391, 50.61689835749657]},
            to: {name: "Krupets'",
                coord: [25.312288648458793, 50.15341714572129]},
            width: 1
        },
        {
            from: {name: "Zaporizhzhia", coord: [35.08093803651404, 47.82992337478532]},
            to: {name: "Nikopol'",
                coord: [34.384072564827314, 47.57706497508324]},
            width: 1
        },
        {
            from: {name: "Chernihiv", coord: [31.260221727508824, 51.49441204206042]},
            to: {name: "Lovyn",
                coord: [31.190748371392083, 51.89514612513057]},
            width: 1
        },
        {
            from: {name: "Chernihiv", coord: [31.260221727508824, 51.49441204206042]},
            to: {name: "Rudka",
                coord: [31.12376260440231, 51.574010660227756]},
            width: 1
        },
        {
            from: {name: "Chernihiv", coord: [31.260221727508824, 51.49441204206042]},
            to: {name: "Voznesens'ke",
                coord: [31.429416761612366, 51.52773583240854]},
            width: 1
        }
    ]; //

    const markers = [
        {
            markerOffset: -15,
            name: "Uzhhorod",
            coord: [22.292754566059685, 48.61141438652128],
            size: 7,
            fontsize: "big"
        },
        {
            markerOffset: -15,
            name: "Kyiv",
            coord: [30.610073906378048, 50.46607409412448],
            size: 7,
            fontsize: "big"
        },
        {
            markerOffset: 13,
            name: "Zhovti Vody",
            coord: [33.50571040726277, 48.341116839229336],
            size: 3,
            fontsize: "small"
        },
        {
            markerOffset: -15,
            name: "Dnipro",
            coord: [34.96432899932629, 48.47650767170614],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: -15,
            name: "Lviv",
            coord: [24.034266802070974, 49.84101254218815],
            size: 7,
            fontsize: "big"
        },
        {
            markerOffset: -15,
            name: "Rivne",
            coord: [26.24857166794391, 50.61689835749657],
            size: 7,
            fontsize: "big"
        },
        {
            markerOffset: -15,
            name: "Ivano-Frankivsk",
            coord: [24.712452308901177, 48.91689165306165],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: -15,
            name: "Kropyvnytskyi",
            coord: [32.236775446294494, 48.51902890628777],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: -7,
            name: "Uman",
            coord: [30.222129709714842, 48.739938944519],
            size: 3,
            fontsize: "small"
        },
        {
            markerOffset: -10,
            name: "Chernihiv",
            coord: [31.260221727508824, 51.49441204206042],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: -15,
            name: "Kharkiv",
            coord: [36.26421543857359, 49.9865161561984],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: -7,
            name: "Rakhiv",
            coord: [24.20239751684332, 48.053121946557006],
            size: 3,
            fontsize: "small"
        },
        {
            markerOffset: -7,
            name: "Bila Tserkva",
            coord: [30.128043280387608, 49.788024316713],
            size: 3,
            fontsize: "small"
        },
        {
            markerOffset: 12,
            name: "Zaporizhzhia",
            coord: [35.08093803651404, 47.82992337478532],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: 13,
            name: "Boryspil",
            coord: [30.959750111715095, 50.356889114110075],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 23,
            name: "Gora",
            coord: [30.867065153399555, 50.36999386395913],
            size: 2,
            fontsize: "small transparent"
        },
        {
            markerOffset: 13,
            name: "Brovary",
            coord: [30.80943885491954, 50.51736687652111],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 20,
            name: "Poltava",
            coord: [34.53452393683615, 49.59164675793591],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: 20,
            name: "Zhytomyr",
            coord: [28.66439836704758, 50.266598620844846],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: 20,
            name: "Vinnytsia",
            coord: [28.466542390168907, 49.23650621220418],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: -10,
            name: "Ternopil",
            coord: [25.596239277493275, 49.55862987822186],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: 20,
            name: "Khmelnitskyi",
            coord: [26.989892273212526, 49.42248824184398],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: 20,
            name: "Mykolaiv",
            coord: [31.997574976773457, 46.9560479996003],
            size: 4,
            fontsize: "big"
        },
        {
            markerOffset: -7,
            name: "Lovyn",
            coord: [31.190748371392083, 51.89514612513057],
            size: 3,
            fontsize: "small"
        },
        {
            markerOffset: -3,
            name: "Voznesens'ke",
            coord: [31.429416761612366, 51.52773583240854],
            size: 2,
            fontsize: "small transparent"
        },
        {
            markerOffset: 15,
            name: "Trysviatska Sloboda",
            coord: [31.200752383551418, 51.47450075488449],
            size: 2,
            fontsize: "small transparent"
        },
        {
            markerOffset: 13,
            name: "Novoselivka",
            coord: [31.3840060225008, 51.53153187662448],
            size: 2,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Rudka",
            coord: [31.12376260440231, 51.574010660227756],
            size: 2,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Hlevakha",
            coord: [30.30076877812614, 50.258826464985376],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Ukrainka",
            coord: [30.742465576941445, 50.13824843303133],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Vyshhorod",
            coord: [30.485167230571285, 50.60660795110132],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Nemishajeve",
            coord: [30.091116691777433, 50.56598962518502],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Krasylivka",
            coord: [30.9070026337559, 50.52240806189084],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Zazymie",
            coord: [30.678510929085917, 50.573870120821425],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Rohoziv",
            coord: [31.051791952750637, 50.234557771921416],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Ivankovychi",
            coord: [30.422519382072586, 50.27618612536],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Rozvazhiv",
            coord: [29.652703009354386, 50.92617811753054],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Kukhari",
            coord: [29.59129934907143, 50.81913177939115],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Sukachi",
            coord: [29.930114255505647, 50.961022071560144],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Borodyanka",
            coord: [29.918502669983997, 50.64531753753848],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Makariv",
            coord: [29.805496256049555, 50.46102994330686],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Obukhiv",
            coord: [30.623385576571046, 50.11644617166146],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Mala Vyska",
            coord: [31.63387880972492, 48.648674440153556],
            size: 3,
            fontsize: "small"
        },
        {
            markerOffset: 12,
            name: "Lypivka",
            coord: [29.811204791851726, 50.51041295391686],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Vablya",
            coord: [29.868635697467898, 50.592917217276735],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Andriivka",
            coord: [29.834013869844693, 50.55063209621665],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Nove Zalissya",
            coord: [29.967067326763097, 50.691959072996774],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Berestyanka",
            coord: [29.993446311053162, 50.69138447982739],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Shybene",
            coord: [30.010968585906372, 50.73069631536426],
            size: 3,
            fontsize: "small transparent"
        },
        {
            markerOffset: 12,
            name: "Krupets'",
            coord: [25.312288648458793, 50.15341714572129],
            size: 3,
            fontsize: "small"
        },
        {
            markerOffset: 12,
            name: "Nikopol'",
            coord: [34.384072564827314, 47.57706497508324],
            size: 3,
            fontsize: "small"
        }
    ];  //

    return <div className="map">
        <h1 className="mapHeadLine">{t("map")}</h1>
        <div className="content">
            <ComposableMap 
                projection={"geoAlbers"}
                projectionConfig={{
                    rotate: [-32.0, -9.5, 0],
                    scale: 4500
                }} width={1000} height={725}>
                <Geographies geography={geoUrl} className="map">
                    {({geographies}) =>
                        geographies.map(geo =>
                            <Geography key={geo.rsmKey} geography={geo}
                                       fill="#9998A3"
                                       stroke="#626263"
                                       style={{
                                           default: {
                                               fill: "#454545",
                                               outline: "none"
                                           },
                                           hover: {
                                               fill: "#454545", //#575757
                                               outline: "none"
                                           },
                                           pressed: {
                                               fill: "#454545",
                                               outline: "none"
                                           }
                                       }}
                            />)
                    }
                </Geographies>
                {flightDestinations.map((route) => (
                    <>
                        <Line
                            key={route.to.city+route.from.coord}
                            from={route.from.coord}
                            to={route.to.coord}
                            stroke="rgba(255, 255, 255, 0.3)"
                            strokeWidth={route.width}
                            strokeLinecap="square"
                        />
                    </>
                ))}
                {markers.map(({name, coord, markerOffset, size, fontsize}) => (
                    <Marker key={name+coord} coordinates={coord}>
                        <circle r={size} fill="#E24E4E" stroke="#E24E4E" strokeWidth={0}/>
                    </Marker>
                ))}
                {markers.map(({name, coord, markerOffset, size, fontsize}) => (
                    <Marker key={name+coord} coordinates={coord}>
                        <text
                            key={name+coord}
                            textAnchor="middle"
                            y={markerOffset}
                            // x={markerOffset}
                            style={{fontFamily: "Fira_Sans light"}}
                            className={fontsize}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}

            </ComposableMap>
        </div>
    </div>

}

export default Map;