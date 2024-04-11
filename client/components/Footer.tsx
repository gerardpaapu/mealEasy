export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer-bg-color flex h-16 items-center justify-center">
      <p className=" text-gray-600">© Meal Easy {currentYear}</p>
    </div>
  )
}
