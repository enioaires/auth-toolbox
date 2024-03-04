"use client";
import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export const BackButton: FC<Props> = ({ href, label }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
