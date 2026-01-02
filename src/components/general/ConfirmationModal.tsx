"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Trash2, X } from "lucide-react";

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'info';
}

export default function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "Supprimer",
    cancelText = "Annuler",
    variant = 'danger'
}: ConfirmationModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-sm bg-white rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden border border-black/5"
                    >
                        <div className="p-8">
                            <div className="flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${variant === 'danger' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                                    {variant === 'danger' ? <Trash2 className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                                </div>

                                <h3 className="text-xl font-bold tracking-tight text-black mb-2">{title}</h3>
                                <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-8">
                                    {message}
                                </p>

                                {/* Actions */}
                                <div className="grid grid-cols-2 gap-3 w-full">
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-3 bg-[#F5F5F7] hover:bg-[#E8E8ED] text-zinc-600 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-[0.98]"
                                    >
                                        {cancelText}
                                    </button>
                                    <button
                                        onClick={() => {
                                            onConfirm();
                                            onClose();
                                        }}
                                        className={`px-6 py-3 rounded-xl text-white text-xs font-black uppercase tracking-widest transition-all active:scale-[0.98] shadow-lg ${variant === 'danger' ? 'bg-red-500 shadow-red-500/20 hover:bg-red-600' : 'bg-black shadow-black/20 hover:bg-zinc-800'}`}
                                    >
                                        {confirmText}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Top corner X */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-zinc-300 hover:text-black transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
