import React from "react";
import Image from 'next/image'

export default function Mission({ item }) {
    const imgSrc = item?.links?.mission_patch_small;
    const landSuccess = item?.rocket?.first_stage?.cores[0]?.land_success;
    return (
        <div className="mission">
            <Image
                src={imgSrc}
                alt={item?.mission_name}
                width={500}
                height={500}
                className="missionImage"
                objectPosition=""
            />
            <div className="missionTitle">{item?.mission_name} #{item?.flight_number}</div>
            {
                item?.mission_id.length > 0 && (
                    <div className="missionItem">
                        <div className="missionKey">Mission Ids:</div>
                        <ul>
                            {
                                item.mission_id.map(id => <li key={id} className="missionValue">{id}</li>)
                            }
                        </ul>
                    </div>
                )
            }
            <div className="missionItem">
                <span className="missionKey">Launch Year:{' '}</span>
                <span className="missionValue">{item?.launch_year}</span>
            </div>
            <div className="missionItem">
                <span className="missionKey"> Successful Launch:{' '}</span>
                <span className="missionValue">{String(item?.launch_success)}</span>
            </div>
            <div className="missionItem">
                <span className="missionKey">Successful Landing:{' '}</span>
                <span className="missionValue">{String(landSuccess)}</span>
            </div>
        </div>
    );
}