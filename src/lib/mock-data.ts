import athlete1 from "@/assets/athlete-1.jpg";
import athlete2 from "@/assets/athlete-2.jpg";
import athlete3 from "@/assets/athlete-3.jpg";

export const stats = [
  { value: "1,240+", label: "Registered Athletes" },
  { value: "38", label: "District Associations" },
  { value: "62", label: "State Championships" },
  { value: "87", label: "National Medals" },
];

export const tournaments = [
  {
    id: "1",
    title: "45th Tamil Nadu State Arm Wrestling Championship",
    date: "2026-08-14",
    venue: "Jawaharlal Nehru Stadium, Chennai",
    organizer: "TTNAWA",
    status: "Registration Open",
    categories: ["Men", "Women", "Sub-Junior", "Junior", "Senior", "Masters"],
    description: "The flagship annual state championship bringing together the strongest athletes from all 38 districts of Tamil Nadu.",
  },
  {
    id: "2",
    title: "South Zone Inter-District Cup",
    date: "2026-09-20",
    venue: "Codissia Trade Fair Complex, Coimbatore",
    organizer: "TTNAWA Coimbatore",
    status: "Coming Soon",
    categories: ["Men", "Women"],
    description: "Inter-district competition featuring top-ranked athletes from Southern Tamil Nadu.",
  },
  {
    id: "3",
    title: "TTNAWA Youth Talent Hunt",
    date: "2026-10-05",
    venue: "Anna Stadium, Madurai",
    organizer: "TTNAWA Youth Wing",
    status: "Registration Open",
    categories: ["Sub-Junior", "Junior"],
    description: "Statewide talent identification tournament for athletes aged 12-18.",
  },
  {
    id: "4",
    title: "Women's State Open",
    date: "2026-11-15",
    venue: "YMCA Ground, Salem",
    organizer: "TTNAWA Women's Cell",
    status: "Coming Soon",
    categories: ["Women"],
    description: "Dedicated women's championship promoting female participation across all weight classes.",
  },
];

export const pastTournaments = [
  { id: "p1", title: "44th State Championship", date: "2025-08-16", venue: "Chennai", winner: "Chennai District" },
  { id: "p2", title: "National Selection Trials", date: "2025-06-12", venue: "Trichy", winner: "Madurai District" },
  { id: "p3", title: "Coimbatore Open 2025", date: "2025-04-22", venue: "Coimbatore", winner: "Erode District" },
];

export const news = [
  {
    id: "1",
    title: "Tamil Nadu Bags 12 Medals at National Championship",
    excerpt: "TTNAWA athletes deliver a historic performance at the 2025 National Arm Wrestling Championship held in Delhi.",
    category: "Athlete Achievements",
    date: "2026-06-28",
    author: "TTNAWA Press",
  },
  {
    id: "2",
    title: "Registration Opens for 45th State Championship",
    excerpt: "Athletes across all districts can now register online for the flagship state championship.",
    category: "Tournament News",
    date: "2026-06-15",
    author: "General Secretary",
  },
  {
    id: "3",
    title: "New District Unit Launched in Nilgiris",
    excerpt: "TTNAWA expands its footprint with the official inauguration of Nilgiris District Association.",
    category: "Association News",
    date: "2026-05-30",
    author: "TTNAWA Press",
  },
  {
    id: "4",
    title: "Coaching Certification Programme 2026",
    excerpt: "TTNAWA announces its annual Level-1 and Level-2 coach certification programme.",
    category: "Circulars",
    date: "2026-05-10",
    author: "Technical Committee",
  },
  {
    id: "5",
    title: "Women's Wing Launches Talent Scouting Drive",
    excerpt: "A statewide initiative to identify and nurture female talent in arm wrestling.",
    category: "Association News",
    date: "2026-04-22",
    author: "Women's Cell",
  },
  {
    id: "6",
    title: "R. Karthik Wins Gold at Asian Championship",
    excerpt: "TTNAWA athlete brings home international glory in the 85kg category.",
    category: "Athlete Achievements",
    date: "2026-04-05",
    author: "TTNAWA Press",
  },
];

export const athletes = [
  { id: "a1", name: "Karthik Ramanathan", district: "Chennai", category: "85kg", gender: "Men", rank: 1, points: 2840, medals: 14, photo: athlete1 },
  { id: "a2", name: "Priya Selvam", district: "Coimbatore", category: "60kg", gender: "Women", rank: 1, points: 2610, medals: 11, photo: athlete2 },
  { id: "a3", name: "Arun Kumar", district: "Madurai", category: "75kg", gender: "Men", rank: 2, points: 2540, medals: 9, photo: athlete3 },
  { id: "a4", name: "Vignesh Balaji", district: "Trichy", category: "90kg", gender: "Men", rank: 1, points: 2720, medals: 12, photo: athlete1 },
  { id: "a5", name: "Divya Krishnan", district: "Salem", category: "55kg", gender: "Women", rank: 2, points: 2380, medals: 8, photo: athlete2 },
  { id: "a6", name: "Ganesh Murugan", district: "Erode", category: "100kg", gender: "Men", rank: 1, points: 2890, medals: 15, photo: athlete3 },
  { id: "a7", name: "Meena Ravichandran", district: "Vellore", category: "65kg", gender: "Women", rank: 1, points: 2450, medals: 10, photo: athlete2 },
  { id: "a8", name: "Sathish Kumar", district: "Tirunelveli", category: "70kg", gender: "Men", rank: 2, points: 2320, medals: 7, photo: athlete1 },
];

export const committee = [
  { name: "Dr. R. Muthukumar", role: "President", bio: "Sports administrator with 25+ years in athletic federation leadership.", photo: athlete3 },
  { name: "S. Kavitha", role: "Vice President", bio: "Former national arm wrestling champion and women's sports advocate.", photo: athlete2 },
  { name: "M. Rajesh", role: "General Secretary", bio: "Driving force behind TTNAWA's expansion across all Tamil Nadu districts.", photo: athlete1 },
  { name: "P. Suresh Babu", role: "Joint Secretary", bio: "Coordinates inter-district tournaments and technical operations.", photo: athlete3 },
  { name: "K. Lakshmi", role: "Treasurer", bio: "Chartered Accountant managing federation finances and sponsorships.", photo: athlete2 },
  { name: "T. Vijay Anand", role: "Executive Member", bio: "Youth development and grassroots talent identification lead.", photo: athlete1 },
];

export const sponsors = [
  { name: "Chennai Steel Co.", tier: "Title Sponsor" },
  { name: "Kovai Nutrition", tier: "Gold Sponsor" },
  { name: "Madurai Sports Gear", tier: "Gold Sponsor" },
  { name: "Trichy Fitness Hub", tier: "Silver Sponsor" },
  { name: "Salem Protein Labs", tier: "Silver Sponsor" },
  { name: "Erode Ironworks", tier: "Bronze Sponsor" },
  { name: "Tirunelveli Health Foods", tier: "Bronze Sponsor" },
  { name: "Vellore Sports Wear", tier: "Bronze Sponsor" },
];

export const weightCategoriesMen = ["55kg", "60kg", "65kg", "70kg", "75kg", "80kg", "85kg", "90kg", "100kg", "100kg+"];
export const weightCategoriesWomen = ["50kg", "55kg", "60kg", "65kg", "70kg", "80kg+"];
export const districts = ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Erode", "Vellore", "Tirunelveli", "Tanjore", "Nilgiris"];
