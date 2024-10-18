import Image from "next/image";
import React from "react";

const TechnologySection = () => {
  const techImages = [
    "https://s3-alpha-sig.figma.com/img/e938/7d9d/534e61c2f6c87b5bed8b90fdb26e861f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hw2pqNGnM701eZfizMGJDI8EQk6Yi0XJf4QjQN20FWXsyBIz1PbC4psQTHdvBdTFcS4cJ-gv4aJidyRlVDSwRZ1yF6YpaSLl4yc5hyG46UV~GGJBGU~fktfT2743iwD81FYhL6tXh5K8FMVeNQSmdrhdGOWj-uXQmN-cjbn0Mn7Ry6oP-x0fWrySWB04CI8I0vLVL~GJTavq8TSXD~eikiIImD2h-kFsHvC~mqSPb7-D-DGIdQMZ-clyaf1f6eGQPo44MXe5fE8TE20ECuKN1kS0vGPbPrNeXcOxEvDD1XWbeDY17uGFmdEdPK06vykV8Bs3rOcGQXX~qrZjT28zsg__",
    "https://s3-alpha-sig.figma.com/img/8f48/6418/49e2d609a08e02b51a4e5ceea760294a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DdYSBGKlc7XUPJRYha8Ueu7fyJJWZo0m8pG-aT9V8P0uH9sOogO2xybkuJyimZjma~sQL4VqyMpTZXO9CygDMuHKj98tk1Ayd3NZXKBXIRnmiVnpDEXt1BB-XCGt8nJelDXonHDLlTT23XOGcEJKWA9aki1cNiftAbFa-4lRhhIId1eyT-bJeXpmRxqWUEzKiLL3lp~FaDfm7pgWdWP3eiG4bml6k6yTG2IDcocM8GqmqvjdjKCm6OmIpQNgB1DmbodN0w3GenKfWARKc-CcEwPaVvmaP9ZXUIodjXaJmC8WGGLsSmwPGIpP-brwfJWeTlY5ghbpR4tZrzh~viVs3Q__",
    "https://s3-alpha-sig.figma.com/img/7832/02fd/39732eafe964dd1265af3e14b6767355?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNdF1JRhomR4W57qGTP6VjSuO83-OpAogtNbTvVkD6t8WFt0nX4o6iX9o-fmUK9uFkIhGS0lckWnQ6RpeC5cVUZPult1yYQ97TbTYYabD5nkpt2JPA9v-owY5jm3tGr-bPzY36U5EP~v2694JvFjI86oNcFkZraVFZESVS--5ZgRyml5ycebFYT20bqbHoFy7IC7RKcg25KhuobA-lf282~8rKrKfRv45-vT1arkVN2kLE7UOoioUeDV2bxcWAWwOceYCdfEvGJYzl3LFUE~Id~aA-MaSjXNfAquyB8HH11Vihl5sF0a48HU7PpUDwf0UHlcbfF2E4wLFmJ8CrbICQ__",
    "https://s3-alpha-sig.figma.com/img/e07c/872b/7c927a57666cc9a891d9c52b11150753?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0-Op6k0zv00c8Y4GiICX4eyjDfBydYIS5dF5rjlm9L~3o7vvazdW02xEmIPZ~wHewBTK4Ldti09ckMvj27olMuoRJGpRP42gZ11H-LmLAEQe8PXIN0PdCuUIuVFhMfXmT8~nXf4yBotfhGBRdKzoCMR7T8AaqberzcznRpmyNXAlGech-S8YqOSNm0sEp9kvPT03lQ1X0rJlvt0ZfhHbYYyJYr8X70B4FBGDPqHZxVP-ymCcheeiR9trswv6i~M4B0DmRQzPPsiED3bIpoctZAFbaxJoJrA-ngmq1BXBt82dHX7ecYfuwwBKAOw6M-ia-38W0128Q6o02~rfSVQXw__",
    "https://s3-alpha-sig.figma.com/img/74bd/87bb/d4ada1b2c5c4c515eaaf7fff02ed9f07?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O7lfc~pMQQgp-Gb8X4fNfYjgmNEreCGa8xGCYnrC-dTkW~SpT0ksIutO55U550-UlfNB0pIilukyPlGY3435~hvWz5B4KFagnpK1upCUDnVtVpTZU9u7xzdrLXEI6ldi4S~0qigVilmLBDELhbm~1jf42KqzzruHk-r~swCrTa8VUze4W9l2RBnERT62kug4lxExyiuJIQFZIvrUiMav1mnzT4CGhefTpN8p6uAacQKt-uRTCy0nWpl9owGt3MrjcSnOKOLTMwBhYhHgXWFVxEdOMfyewueEKZ7rly8Gk1u3MZzuoqyEkvaivLnoKWMuU2lXEZefQ2tBt5lT6BGGag__",
    "https://s3-alpha-sig.figma.com/img/5061/acb0/d07d725fffd6b7b30901825115272d3b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XrO1wSw0YMNuzA52Jxy74~tcFqmguLp6PsTVSdQFANzyyjqlk88AlG33rFbAeCbVyIPTbaHvhXZR1Bo1rVuu6j-M~vkqWS2FO4k9nJI1xFZJf6mnEVXhfa9SM8c4eriIo~l1EwG-M5WycYBDI9DfdcqacRS3VZTp-ZVlqcbnMJ0n63qIz5eKatbilam9iwoUL7Pb6~P23UA7ZUvQsfRH7fjrjApV8d-oy4sQLEEEex3Qx44DjgIzpbD4vA9ulQ4B8tk48VHxqLw5vysT6xZIQAFyKwmYwd1WIfQhf6Py7KbEybYGPzqpbGQdrsTy9g9Od8~rEM~uae1f~9Y7-c4fag__",
    "https://s3-alpha-sig.figma.com/img/5227/06b2/1738cdb23bd4af836867a5abc5c6f049?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D0w85Ii9d-6I7tJ1TnzA-qPvPPqVTCpX2UTV7YaCERuhWJ-C7TFew4JR8N6VrL2viwKm4vrYZj04Bgf7DaGWRO5d~WdXAbnxKhnDGlf4yiC4izeGtsUc8ZGjptwmEfgzmMwp2yorTUpJRia-keNVfGmewdOCCE8AJ75ZnFyi5f87GBFfSQMa3UPMRVEaHLpogW3zPXJjQbCOVDwYmStMSiGZN1jxd3rCIcqah8m~sCP1cH8H8j4fae-Ed06MpmfKMElUiTEFAhYs0XvRHM8NZTljGwO6affs-~dpilUJs5QtHYNXO1cyzqCE4epZosZIzrycC5tMdyOkRqRsIH~-9A__",
    "https://s3-alpha-sig.figma.com/img/80dc/a9a4/a1fbf33a4327d9e9e7bb737713ef95b0?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZludwBpVYGtQ~Vq3ICGNijcdlrUY~8HCr6P4U5cNsv34bKq7VqHRuaeJ7CuDuYKyTmW5M2~b5MDApxVeXWbOwTqXri3EE1IM1e0XFc4LHAepVwc8Jn8XLCrCrkGIgK4xZxd2TrZftuceXJmhRFk-EmEx6Y-WM461z~-W~ljBLLJ1AaWp~MijypIYvTYSdA7LJx2zu74iawd6gV3PvaXxODHPoeXwfoo5wK72sqQKS1UsqkVqDftHN~s7HSPmgBUIkhbTsEXSmAYRrqWLcCOX-drh0Nga8oYRSCOzh5gceuPzvnqRR37NIevpjsMLir4aOdeB4A0Hx7FYaQRlrQlwFA__",
    "https://s3-alpha-sig.figma.com/img/ae79/5d9a/344680aa65fd33d7103d2a4a8ff60bbd?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=puXlARZKpcJyqn7UPwtpGDIa~A64wRdykLK-6RDFn3s4f2cjAb9gfOrWNOzdquNYqCq-g7eONgrOXvzDe5-Ycf2~3UbjkVD6JGvcibFor-mS1AT3957--ddzYmqKUbYDTp1m5GurT9I~dnscdiZigonLkc4c8SaPvqEFg4BfR7IFO2lubDgEEMG05bgJVoprkSZMf07A5sj6moOA-lrm-RsMKZl2MtwDJ3Y88NfJf~JyOGD6E0G~g1NiZwwQoKHhUMdgwOaXGQeh3xDRbowcbRH8suisjO3QSqA24aC4vxL3Qw4VkaBkJBSjhRS5OANxtlQLEa6E4Q1fYh29IYstNg__",
  ];
  return (
    <div>
      <h1 className="font-semibold text-[48px] text-center my-10">
        Technologies/Tools I Use Or <br /> Have Experience With
      </h1>
      <div className="flex gap-24 flex-wrap justify-center my-20">
        {techImages.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="img"
            width={100}
            height={10}
            layout="intrinsic"
          />
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
