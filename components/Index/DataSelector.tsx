import React, { useEffect, useState } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

const RadioButtonsWrapper = (child: React.ReactElement): React.ReactElement => {
    return (
        <div className="mr-1 rounded border border-black border-opacity-30 bg-white p-2 w-20 text-center">
            {child}
        </div>
    );
};

const RadioLabelWrapper = (label: string): React.ReactElement => {
    return <span className="ml-1">{label}</span>;
};

type DataSelectorProps = {
    targetData: string;
    setTargetData: React.Dispatch<React.SetStateAction<string>>;
};

const DataSelector: React.FunctionComponent<DataSelectorProps> = ({
    targetData,
    setTargetData,
}) => {
    const [day, setDay] = useState('d1');
    const [time, setTime] = useState('t0');

    useEffect(() => {
        const d = targetData.substring(0, 2);
        const t = targetData.substring(2, 4);
        setDay(d);
        setTime(t);
    }, [targetData]);

    useEffect(() => {
        setTargetData(day + time);
    }, [day, time]);

    return (
        <div className="flex">
            {RadioButtonsWrapper(
                <>
                    <div className="font-semibold mb-1">日付種別</div>
                    <RadioGroup
                        name="day"
                        selectedValue={day}
                        onChange={setDay}
                    >
                        <label>
                            <Radio value="d0" />
                            {RadioLabelWrapper('休日')}
                        </label>
                        <br />
                        <label>
                            <Radio value="d1" />
                            {RadioLabelWrapper('平日')}
                        </label>
                        <br />
                        <label>
                            <Radio value="d2" />
                            {RadioLabelWrapper('全日')}
                        </label>
                    </RadioGroup>
                </>,
            )}
            {RadioButtonsWrapper(
                <>
                    <div className="font-semibold mb-1">時間帯</div>
                    <RadioGroup
                        name="time"
                        selectedValue={time}
                        onChange={setTime}
                    >
                        <label>
                            <Radio value="t0" />
                            {RadioLabelWrapper('昼間')}
                        </label>
                        <br />
                        <label>
                            <Radio value="t1" />
                            {RadioLabelWrapper('深夜')}
                        </label>
                        <br />
                        <label>
                            <Radio value="t2" />
                            {RadioLabelWrapper('終日')}
                        </label>
                    </RadioGroup>
                </>,
            )}
        </div>
    );
};
export default DataSelector;
