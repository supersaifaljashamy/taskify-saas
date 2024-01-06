"use client";
import { List } from "@prisma/client";
import { useEffect, useState } from "react";
import { useAction } from "@/hooks/use-action";


interface ListContainerProps {
  data: List[];
  boardId: string;
};


export const ListContainer = ({
  data,
  boardId,
}: ListContainerProps) => {
  return (
    <div>
        List Container
    </div>
  );
};