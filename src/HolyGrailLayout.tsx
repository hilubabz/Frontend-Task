const HolyGrailLayout = () => {
  return (
    <div>
        <header className="w-full h-[60px] text-white bg-[#FF6348] text-center">Header</header>
        <div className="h-[calc(100vh-160px)] flex">
			<aside className="h-full w-[100px] bg-[#FF7F50] text-center">Navigation</aside>
			<main className="h-full w-[calc(100vw-200px)] text-center bg-[#FFE4B4]">Main</main>
			<aside className="h-full w-[100px] bg-[#F4A361] text-center">SideBar</aside>
        </div>
        <footer className="w-full h-[100px] text-white bg-[#707F8F] text-center">Footer</footer>
    </div>
  )
}

export default HolyGrailLayout