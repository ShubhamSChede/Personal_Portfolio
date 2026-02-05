'use client';

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const followerPosRef = useRef({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const DOT_SPEED = 1; // dot follows instantly
    const FOLLOWER_EASE = 0.18; // lower = smoother, slower trail

    const setCursorPosition = (el, x, y) => {
      if (!el) return;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
        posRef.current.x = e.clientX;
        posRef.current.y = e.clientY;
        followerPosRef.current.x = e.clientX;
        followerPosRef.current.y = e.clientY;
        setCursorPosition(cursor, e.clientX, e.clientY);
        setCursorPosition(follower, e.clientX, e.clientY);
      }
    };

    const handleMouseLeave = (e) => {
      if (!e.relatedTarget || !document.documentElement.contains(e.relatedTarget)) {
        visibleRef.current = false;
        setVisible(false);
      }
    };

    const handleMouseEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    const animate = () => {
      const target = targetRef.current;
      const pos = posRef.current;
      const followerPos = followerPosRef.current;

      pos.x += (target.x - pos.x) * DOT_SPEED;
      pos.y += (target.y - pos.y) * DOT_SPEED;
      followerPos.x += (target.x - followerPos.x) * FOLLOWER_EASE;
      followerPos.y += (target.y - followerPos.y) * FOLLOWER_EASE;

      setCursorPosition(cursor, pos.x, pos.y);
      setCursorPosition(follower, followerPos.x, followerPos.y);

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleHoverEnter = () => {
      if (cursor) {
        cursor.style.width = '6px';
        cursor.style.height = '6px';
        follower.style.width = '32px';
        follower.style.height = '32px';
        follower.style.borderWidth = '2px';
      }
    };

    const handleHoverLeave = () => {
      if (cursor) {
        cursor.style.width = '';
        cursor.style.height = '';
        follower.style.width = '';
        follower.style.height = '';
        follower.style.borderWidth = '';
      }
    };

    document.body.style.cursor = 'none';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    const interactiveSelector = 'a, button, [data-cursor="pointer"]';
    const handlePointerOver = (e) => {
      if (e.target.closest(interactiveSelector)) handleHoverEnter();
    };
    const handlePointerOut = (e) => {
      if (e.target.closest(interactiveSelector) && !e.relatedTarget?.closest(interactiveSelector)) {
        handleHoverLeave();
      }
    };
    document.addEventListener('mouseover', handlePointerOver);
    document.addEventListener('mouseout', handlePointerOut);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseout', handlePointerOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed left-0 top-0 w-2 h-2 bg-indigo-400 rounded-full pointer-events-none z-[9999]"
        style={{
          willChange: 'transform',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.3)',
        }}
        aria-hidden
      />
      <div
        ref={followerRef}
        className="fixed left-0 top-0 w-8 h-8 border border-indigo-400/60 rounded-full pointer-events-none z-[9998]"
        style={{
          willChange: 'transform',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.15s ease-out, width 0.2s ease, height 0.2s ease',
        }}
        aria-hidden
      />
    </>
  );
};

export default CustomCursor;
