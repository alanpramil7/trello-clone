"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";

export const Info = () => {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return <Info.skeleton />;
  }

  return (
    <div className="flex items-center gap-x-4">
      <div className="h-[60px] w-[60px] relative">
        <Image
          src={organization?.imageUrl!}
          fill
          alt="Organization"
          className="object-cover rounded-md"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization?.name}</p>
        <div className="flex text-muted-foreground text-xs">
          <CreditCard className="h-3 w-3 mr-1" />
          Free
        </div>
      </div>
    </div>
  );
};

Info.skeleton = function SkeletonInfo() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="h-[60px] w-[60px] relative">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <div className="space-y-1">
        <Skeleton className="h-10 w-[200px]" />
        <div className="flex items-center">
          <Skeleton className="h-4 w-4 mr-2" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
};
