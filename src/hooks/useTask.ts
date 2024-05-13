import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";

export type Template = {
    content: string;
    area_mapping: Record<string, string>;
}

export type Task = {
    id: number; //в бэке почему-то необяз
    description: string;
    is_solved?: boolean,
    group_id: number,
    group?: number,
    template: Template,
};

type TaskList = {
    count: number,
    next?: string | null,
    previous?:	string | null,
    results: Task[],
};

type TaskDetail = {
    detail: string;
}
    
export function useTask(taskgroupId: string | undefined) {
    let [data, setData] = useState<Task[]>([]);
    let [accessToken] = useRefreshWrapper();
    useEffect(() => {
        if (taskgroupId == undefined || (!/\d+/.test(taskgroupId))) {
            return;
        }
        fetch(`http://localhost:8000/api/v1/tasks?group__id=${taskgroupId}`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
        }).then(async (response) => {
            const text = await response.text();
            if (response.status == 200) {
                let responseData: TaskList = JSON.parse(text);
                setData(responseData.results);
            } else {
                let responseData: TaskDetail = JSON.parse(text);
                console.log(responseData.detail);
            }
        });
    }, [accessToken, taskgroupId]);
    return [data];
}
