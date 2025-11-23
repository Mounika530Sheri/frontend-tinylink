import { useEffect, useState } from "react";
import axios from "axios";
import AddLinkForm from "./AddLinkForm";
import LinkTable from "./LinkTable";

const API = "https://tinylink-2-bfcu.onrender.com"

export default function Dashboard() {
  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    const res = await axios.get(`${API}/api/links`);
    setLinks(res.data);
  };

  useEffect(() => { fetchLinks(); }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">TinyLink Dashboard</h1>
      <AddLinkForm refresh={fetchLinks} />
      <LinkTable links={links} refresh={fetchLinks} />
    </div>
  );
}
