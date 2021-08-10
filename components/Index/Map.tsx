import maplibregl, { FillLayer } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { useState, useRef, useEffect, useCallback } from 'react';

import TemporalControl from '../../maplibre-gl-temporal-controller';

import DataSelector from './DataSelector';

const temporalLayerNames = [
    '201901',
    '201902',
    '201903',
    '201904',
    '201905',
    '201906',
    '201907',
    '201908',
    '201909',
    '201910',
    '201911',
    '201912',
    '202001',
    '202002',
    '202003',
    '202004',
    '202005',
    '202006',
    '202007',
    '202008',
    '202009',
    '202010',
    '202011',
    '202012',
];

const getTemporalLayers = (targetData: string): FillLayer[] => {
    return temporalLayerNames.map((id) => ({
        id,
        type: 'fill',
        source: 'mesh',
        'source-layer': id,
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', targetData],
                0,
                '#ffffff',
                100,
                '#0000ff',
                5000,
                '#00ff00',
                10000,
                '#ffff00',
                30000,
                '#ff0000',
                100000,
                '#990000',
            ],
            'fill-opacity': [
                'interpolate',
                ['linear'],
                ['get', targetData],
                0,
                0,
                100,
                0.1,
                5000,
                0.2,
                10000,
                0.3,
                30000,
                0.4,
                100000,
                0.4,
            ],
        },
        filter: ['boolean', false],
    }));
};

const initialStyle: maplibregl.Style = {
    version: 8,
    sources: {},
    layers: [],
};

const Map: React.FunctionComponent = () => {
    const [mapInstance, setMapInstance] = useState<maplibregl.Map | null>(null);
    const [mapStyle, setMapStyle] = useState<maplibregl.Style>(initialStyle);
    const [targetData, setTargetData] = useState('d0t0');
    const [temporalController, setTemporalController] =
        useState<TemporalControl | null>(null);

    const mapContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapContainer.current === null) return;

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: mapStyle,
            center: [139.7, 35.7],
            zoom: 9,
            minZoom: 6,
            maxZoom: 18,
            customAttribution:
                "<a href='https://www.geospatial.jp/ckan/dataset/mlit-1km-fromto' target='_blank'>全国の人流オープンデータ</a> | <a href='https://twitter.com/kanahiro_iguchi' target='_blank'>@kanahiro_iguchi</a>",
        });
        setMapInstance(map);
        const control = new TemporalControl(
            temporalLayerNames.map((name) => ({
                id: name,
                title: name.substring(0, 4) + '/' + name.substring(4, 7),
            })),
        );
        map.addControl(control);
        setTemporalController(control);
    }, []);

    useEffect(() => {
        const newStyle: maplibregl.Style = {
            version: 8,
            sources: {
                OSM: {
                    type: 'raster',
                    tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                    tileSize: 256,
                    attribution:
                        '<a href="http://osm.org/copyright">© OpenStreetMap contributors</a>',
                },
                mesh: {
                    type: 'vector',
                    tiles: [
                        'https://kanahiro.github.io/temporal-pop-mesh/meshes/{z}/{x}/{y}.pbf',
                    ],
                    minzoom: 9,
                    maxzoom: 9,
                },
            },
            layers: [
                {
                    id: 'OSM',
                    type: 'raster',
                    source: 'OSM',
                    minzoom: 0,
                    maxzoom: 18,
                },
                ...getTemporalLayers(targetData),
            ],
        };
        setMapStyle(newStyle);
    }, [targetData]);

    useEffect(() => {
        mapInstance?.setStyle(mapStyle);
        temporalController?.refresh();
    }, [mapStyle]);

    return (
        <div style={{ height: '80vh' }} ref={mapContainer}>
            <div className="absolute left-2 top-2 z-10">
                <DataSelector
                    targetData={targetData}
                    setTargetData={setTargetData}
                />
            </div>
        </div>
    );
};
export default Map;
