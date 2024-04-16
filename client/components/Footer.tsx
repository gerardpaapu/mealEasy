export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer-bg-color mt-10 flex h-16 items-center justify-center">
      <p className=" text-gray-600">© Meal Easy {currentYear}</p>
    </div>
  )
}
