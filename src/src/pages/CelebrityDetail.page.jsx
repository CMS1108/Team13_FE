import { Suspense, useState } from "react";

import { GridTemplate } from "@/styles/CommonStyle.js";

import CelebDetailInfoSkeleton from "@/components/celebrity-detail/CelebDetailInfoSkeleton.jsx";
import CelebDetailInfo from "@/components/celebrity-detail/CelebDetailInfo";
import Tabs from "@/components/common/button/TabButtons.jsx";
import FundInfoGridCard from "@/components/fund/FundInfoGridCard.jsx";

function CelebrityDetailPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const fundInfo = {
    fundId: 1,
    fundTitle:
      "손흥민 주장된 기념 지하철 광고 🎉🎉 축구중독자가 책임지고 펀딩합니다 ❤️‍🔥",
    thumbnailUrl:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/4118/production/_119546661_gettyimages-1294130887.jpg",
    targetDate: "2023-12-17",
    targetMoney: "3000000",
    currentMoney: "2340000",
    celebrityId: "sonny",
    celebrityName: "손흥민",
    celebrityProfileUrl:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
    organizerId: "soccer123",
    organizerName: "축구도사",
  };

  const tabInfoArray = [
    {
      title: "진행중 펀딩",
      func: () => setSelectedTab(0),
    },
    {
      title: "마감된 펀딩",
      func: () => setSelectedTab(1),
    },
  ];

  return (
    <>
      <Suspense fallback={<CelebDetailInfoSkeleton />}>
        <CelebDetailInfo />
      </Suspense>

      <Tabs tabInfoArray={tabInfoArray} style={{ paddingBottom: "1rem" }} />
      <GridTemplate>
        {new Array(6).fill(fundInfo).map((info, index) => (
          <FundInfoGridCard
            key={index}
            fundId={fundInfo.fundId}
            fundTitle={fundInfo.fundTitle}
            thumbnailUrl={fundInfo.thumbnailUrl}
            targetDate={fundInfo.targetDate}
            targetMoney={fundInfo.targetMoney}
            currentMoney={fundInfo.currentMoney}
            celebrityId={fundInfo.celebrityId}
            celebrityProfileUrl={fundInfo.celebrityProfileUrl}
            celebrityName={fundInfo.celebrityName}
            organizerId={fundInfo.organizerId}
            organizerName={fundInfo.organizerName}
          />
        ))}
      </GridTemplate>
    </>
  );
}

export default CelebrityDetailPage;
