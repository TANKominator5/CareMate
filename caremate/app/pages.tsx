import Calendar from "@/components/Calender";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-black">
        Medication Analytics
      </h1>
      <Calendar />
    </main>
  );
}
