"use client";

import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Search, Filter, RefreshCw, MessageSquare, Download, Trash2, Eye, CheckCircle2, AlertCircle, FileText, ArrowLeft } from "lucide-react";
import { Enquiry } from "@/lib/storage";

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [editingNotes, setEditingNotes] = useState("");
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/enquiries");
      const json = await res.json();
      if (json.success) {
        setEnquiries(json.enquiries || []);
      }
    } catch (err) {
      console.error("Error fetching enquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleStatusChange = async (id: string, newStatus: Enquiry["status"]) => {
    setUpdatingStatus(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus, notes: editingNotes }),
      });
      const json = await res.json();
      if (json.success) {
        fetchEnquiries();
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry(json.enquiry);
        }
      }
    } catch (err) {
      console.error("Error updating status:", err);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(`Are you sure you want to delete enquiry ${id}?`)) return;
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) {
        if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
        fetchEnquiries();
      }
    } catch (err) {
      console.error("Error deleting enquiry:", err);
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchSearch =
      e.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.mobileNumber.includes(searchTerm) ||
      e.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.printingRequirement.toLowerCase().includes(searchTerm.toLowerCase());

    const matchStatus = statusFilter === "All" || e.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const getStatusColor = (status: Enquiry["status"]) => {
    switch (status) {
      case "New":
        return "bg-amber-500/20 text-[#FFB800] border-amber-500/40";
      case "Contacted":
        return "bg-blue-500/20 text-blue-400 border-blue-500/40";
      case "Quote Sent":
        return "bg-purple-500/20 text-purple-400 border-purple-500/40";
      case "Order Confirmed":
        return "bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/40 font-black";
      case "Completed":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/40";
      case "Cancelled":
        return "bg-red-500/20 text-red-400 border-red-500/40";
      default:
        return "bg-gray-800 text-gray-400 border-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0D] text-gray-100 p-4 sm:p-8">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-3">
            <a href="/" className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </a>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#FFB800] text-black font-black text-xs flex items-center justify-center">
                  FP
                </div>
                <h1 className="text-2xl font-black uppercase text-white tracking-tight">
                  Flex Print Zone — Enquiry Management
                </h1>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Manage business leads, print quotes, artwork files, and status updates.
              </p>
            </div>
          </div>

          <button
            onClick={fetchEnquiries}
            className="px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 text-gray-200 text-xs font-bold uppercase flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh Leads
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="grid sm:grid-cols-12 gap-4">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by customer name, mobile, ID, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#12141A] border border-gray-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#FFB800]"
            />
          </div>

          <div className="sm:col-span-4 flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500 shrink-0" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#12141A] border border-gray-800 text-white text-xs focus:outline-none focus:border-[#FFB800]"
            >
              <option value="All">All Statuses ({enquiries.length})</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Quote Sent">Quote Sent</option>
              <option value="Order Confirmed">Order Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="rounded-2xl bg-[#12141A] border border-gray-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-800 bg-[#161922] text-gray-400 font-bold uppercase tracking-wider">
                  <th className="py-4 px-4">ID</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-4">Customer</th>
                  <th className="py-4 px-4">Mobile / WhatsApp</th>
                  <th className="py-4 px-4">Requirement</th>
                  <th className="py-4 px-4">Size & Qty</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60 font-medium">
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-gray-500 italic">
                      No enquiries found.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((e) => (
                    <tr key={e.id} className="hover:bg-[#181C26] transition-colors">
                      <td className="py-3.5 px-4 font-extrabold text-[#FFB800]">{e.id}</td>
                      <td className="py-3.5 px-4 text-gray-400">
                        {new Date(e.createdAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-white">{e.fullName}</td>
                      <td className="py-3.5 px-4">
                        <div className="text-gray-200">{e.mobileNumber}</div>
                        <a
                          href={`https://wa.me/91${e.whatsappNumber}?text=${encodeURIComponent(`Hello ${e.fullName}, regarding your flex printing enquiry #${e.id}:`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-emerald-400 hover:underline flex items-center gap-1 mt-0.5"
                        >
                          <MessageSquare className="w-3 h-3" /> WhatsApp Reply
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-gray-300">
                        <span className="font-bold text-white">{e.printingRequirement}</span>
                        {e.printingType && <span className="text-[10px] text-gray-500 block">({e.printingType})</span>}
                      </td>
                      <td className="py-3.5 px-4 text-gray-300">
                        {e.dontKnowSize ? (
                          <span className="text-amber-400 text-[11px]">Size Pending</span>
                        ) : (
                          <span>{e.width} × {e.height} {e.unit}</span>
                        )}
                        <span className="text-gray-500 block text-[10px]">Qty: {e.quantity}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-block px-2.5 py-1 rounded-md border text-[10px] uppercase font-black tracking-wider ${getStatusColor(e.status)}`}>
                          {e.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-2">
                        <button
                          onClick={() => {
                            setSelectedEnquiry(e);
                            setEditingNotes(e.internalNotes || "");
                          }}
                          className="p-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 hover:text-white hover:border-[#FFB800]"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(e.id)}
                          className="p-2 rounded-lg bg-gray-900 border border-gray-700 text-red-400 hover:bg-red-500/20"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full bg-[#12141A] rounded-3xl border border-gray-700 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <span className="text-[10px] font-black text-[#FFB800] uppercase tracking-widest">
                  Enquiry Details #{selectedEnquiry.id}
                </span>
                <h3 className="text-2xl font-black text-white uppercase">{selectedEnquiry.fullName}</h3>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="p-2 rounded-full bg-gray-900 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#090A0D] border border-gray-800 space-y-2">
                <span className="text-gray-500 font-bold uppercase block text-[10px]">Contact Information</span>
                <div>Mobile: <span className="text-white font-bold">{selectedEnquiry.mobileNumber}</span></div>
                <div>WhatsApp: <span className="text-emerald-400 font-bold">{selectedEnquiry.whatsappNumber}</span></div>
                <div>Email: <span className="text-gray-300">{selectedEnquiry.email || 'N/A'}</span></div>
                <div>Source: <span className="text-gray-400">{selectedEnquiry.source}</span></div>
              </div>

              <div className="p-4 rounded-xl bg-[#090A0D] border border-gray-800 space-y-2">
                <span className="text-gray-500 font-bold uppercase block text-[10px]">Print Specifications</span>
                <div>Service: <span className="text-[#FFB800] font-extrabold">{selectedEnquiry.printingRequirement}</span></div>
                <div>Size: <span className="text-white font-bold">{selectedEnquiry.dontKnowSize ? 'Assistance Needed' : `${selectedEnquiry.width} × ${selectedEnquiry.height} ${selectedEnquiry.unit}`}</span></div>
                <div>Quantity: <span className="text-white font-bold">{selectedEnquiry.quantity}</span></div>
                <div>Printing Type: <span className="text-gray-300">{selectedEnquiry.printingType}</span></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#090A0D] border border-gray-800 space-y-2 text-xs">
              <span className="text-gray-500 font-bold uppercase block text-[10px]">Finishing & Delivery</span>
              <div>Finishing: <span className="text-gray-300">{selectedEnquiry.finishing.join(', ') || 'None'}</span></div>
              <div>Delivery Option: <span className="text-white font-bold">{selectedEnquiry.deliveryOption}</span></div>
              {selectedEnquiry.deliveryAddress && <div>Address: <span className="text-gray-300">{selectedEnquiry.deliveryAddress}</span></div>}
              {selectedEnquiry.installationLocation && <div>Installation Site: <span className="text-gray-300">{selectedEnquiry.installationLocation}</span></div>}
              <div>Required Date: <span className="text-white font-bold">{selectedEnquiry.requiredDate || 'Not specified'}</span> ({selectedEnquiry.timePreference})</div>
            </div>

            {selectedEnquiry.projectDetails && (
              <div className="p-4 rounded-xl bg-[#090A0D] border border-gray-800 text-xs">
                <span className="text-gray-500 font-bold uppercase block text-[10px] mb-1">Customer Notes</span>
                <p className="text-gray-300 leading-relaxed italic">{selectedEnquiry.projectDetails}</p>
              </div>
            )}

            {selectedEnquiry.artworkFileName && (
              <div className="p-4 rounded-xl bg-emerald-900/20 border border-emerald-500/30 text-xs flex items-center justify-between">
                <div>
                  <span className="text-emerald-400 font-bold block">Uploaded Artwork File</span>
                  <span className="text-gray-400 text-[10px]">{selectedEnquiry.artworkFileName}</span>
                </div>
                <a
                  href={`/uploads/${selectedEnquiry.artworkFileName}`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs uppercase flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Artwork
                </a>
              </div>
            )}

            {/* Status Update & Internal Notes */}
            <div className="pt-4 border-t border-gray-800 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Change Lead Status</label>
                <div className="flex flex-wrap gap-2">
                  {(["New", "Contacted", "Quote Sent", "Order Confirmed", "Completed", "Cancelled"] as Enquiry["status"][]).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(selectedEnquiry.id, st)}
                      disabled={updatingStatus}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase border transition-all ${
                        selectedEnquiry.status === st
                          ? "bg-[#FFB800] text-black border-[#FFB800]"
                          : "bg-gray-900 text-gray-400 border-gray-800 hover:text-white"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Internal Notes</label>
                <textarea
                  rows={2}
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  placeholder="Add private staff notes..."
                  className="w-full p-3 rounded-xl bg-[#090A0D] border border-gray-800 text-xs text-white focus:outline-none focus:border-[#FFB800]"
                />
                <button
                  onClick={() => handleStatusChange(selectedEnquiry.id, selectedEnquiry.status)}
                  className="mt-2 px-4 py-2 rounded-lg bg-gray-800 text-white font-bold text-xs uppercase hover:bg-gray-700"
                >
                  Save Internal Notes
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
