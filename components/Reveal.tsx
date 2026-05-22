'use client';

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// Smooth "ease-out-expo"-ish curve for a clean, professional feel.
const EASE = [0.22, 1, 0.36, 1] as const;

const DISTANCE = 24;
const DURATION = 0.6;

type RevealProps = {
    children: ReactNode;
    className?: string;
    /** Seconds to wait before this element starts revealing. */
    delay?: number;
    /** Margin around the viewport root used to trigger the reveal (rootMargin). */
    margin?: string;
};

/**
 * Fades a single block in (with a subtle upward drift) the first time it
 * scrolls into view. Use for standalone elements; for cascading groups of
 * children, prefer RevealGroup + RevealItem.
 */
export function Reveal({ children, className, delay = 0, margin = "-80px" }: RevealProps) {
    const reduceMotion = useReducedMotion();

    const variants: Variants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : DISTANCE },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: DURATION, ease: EASE, delay },
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin }}
        >
            {children}
        </motion.div>
    );
}

type RevealGroupProps = {
    children: ReactNode;
    className?: string;
    /** Seconds between each child's reveal — drives the top-to-bottom cascade. */
    stagger?: number;
    /** Seconds before the first child reveals. */
    delayChildren?: number;
    margin?: string;
    /** Render as a different motion element (e.g. "header", "ul"). Defaults to div. */
    as?: "div" | "section" | "header" | "ul" | "nav";
};

/**
 * A container that reveals its RevealItem children one after another, top to
 * bottom, once it scrolls into view.
 */
export function RevealGroup({
    children,
    className,
    stagger = 0.12,
    delayChildren = 0,
    margin = "-80px",
    as = "div",
}: RevealGroupProps) {
    const MotionTag = motion[as];

    const variants: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: stagger, delayChildren },
        },
    };

    return (
        <MotionTag
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin }}
        >
            {children}
        </MotionTag>
    );
}

type RevealItemProps = {
    children: ReactNode;
    className?: string;
    /** Render as a different motion element (e.g. "li", "span"). Defaults to div. */
    as?: "div" | "li" | "span" | "p" | "section" | "article" | "header" | "h1" | "h2" | "h3";
};

/**
 * A single item inside a RevealGroup. Inherits the group's stagger timing so a
 * column of items cascades in order.
 */
export function RevealItem({ children, className, as = "div" }: RevealItemProps) {
    const reduceMotion = useReducedMotion();
    const MotionTag = motion[as];

    const variants: Variants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : DISTANCE },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: DURATION, ease: EASE },
        },
    };

    return (
        <MotionTag className={className} variants={variants}>
            {children}
        </MotionTag>
    );
}
