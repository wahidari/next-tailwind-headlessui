import Progress from "@components/Progress";

export default function ProgressRenderer() {
  return (
    <>
      <Progress percent={20} />
      <br />
      <Progress height="!h-2" percent={60} />
      <br />
      <Progress.percentage percent={80} />
      <br />
    </>
  )
}