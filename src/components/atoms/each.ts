import React, { Children } from "react";

interface EachProps {
    of: any[];
    children: (item: any, index: number) => React.ReactNode;
}

export default function Each({ of, children }: EachProps) {
    return (
        Children.toArray(of.map((item, index) => children(item, index)))
    )
}