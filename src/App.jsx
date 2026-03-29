import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { Button } from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Beaker,
  Activity,
  Cpu,
  Waves,
  ShieldCheck,
  Zap,
  Microscope,
  Filter,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
  Droplets,
} from 'lucide-react';

const slides = [
  {
    id: 0,
    title: 'Экология Калуги',
    text: 'Анализ Оки и малых рек. Почему очистка — это база для региона?',
    subject: 'Экология',
    color: 'primary',
    icon: <Waves size={44} />,
  },
  {
    id: 1,
    title: 'Механическая очистка',
    text: 'Сетки и песколовки. Задерживаем крупный мусор.',
    subject: 'Физика',
    color: 'secondary',
    icon: <Filter size={44} />,
  },
  {
    id: 2,
    title: 'Коагуляция',
    text: 'Введение реагентов Al2(SO4)3. Формирование хлопьев.',
    subject: 'Химия',
    color: 'warning',
    icon: <FlaskConical size={44} />,
  },
  {
    id: 3,
    title: 'Биореактор',
    text: 'Активный ил: колонии бактерий поглощают органику и азот.',
    subject: 'Биология',
    color: 'success',
    icon: <Microscope size={44} />,
  },
  {
    id: 4,
    title: 'Аэрация',
    text: 'Насыщение воздухом. Кислород — топливо для бактерий.',
    subject: 'Физика',
    color: 'primary',
    icon: <Activity size={44} />,
  },
  {
    id: 5,
    title: 'Вторичный отстой',
    text: 'Отделение очищенной воды от ила. Сила тяжести.',
    subject: 'Физика',
    color: 'secondary',
    icon: <Waves size={44} />,
  },
  {
    id: 6,
    title: 'Обеззараживание',
    text: 'Хлорирование или гипохлорит натрия. Убиваем 99% бактерий.',
    subject: 'Химия',
    color: 'warning',
    icon: <Beaker size={44} />,
  },
  {
    id: 7,
    title: 'УФ-излучение',
    text: 'Разрушение ДНК вирусов квантами света (254 нм).',
    subject: 'Физика',
    color: 'secondary',
    icon: <Zap size={44} />,
  },
  {
    id: 8,
    title: 'SCADA-системы',
    text: 'Сбор данных с датчиков, управление через ПЛК.',
    subject: 'Информатика',
    color: 'danger',
    icon: <Cpu size={44} />,
  },
  {
    id: 9,
    title: 'Результат',
    text: 'Чистая вода на выходе. Соответствие СанПиН.',
    subject: 'Здоровье',
    color: 'success',
    icon: <ShieldCheck size={44} />,
  },
];

export default function App() {
  const [active, setActive] = useState(0);

  const move = (dir) => {
    if (dir === 'next') setActive((prev) => (prev + 1) % slides.length);
    else setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#020617] text-white antialiased overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-600/10 rounded-full blur-[100px]"
            animate={{
              y: [0, -120, 0],
              x: [0, 30, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: 300 + i * 100,
              height: 300 + i * 100,
              left: `${i * 25}%`,
              top: `${60 - i * 10}%`,
            }}
          />
        ))}
      </div>

      <Navbar
        isBordered
        className="bg-slate-900/60 backdrop-blur-2xl border-white/10 h-24 shrink-0 px-6"
      >
        <NavbarBrand>
          <Droplets className="text-blue-500 mr-4 animate-bounce" size={36} />
          <div className="flex flex-col">
            <p className="font-black text-blue-500 text-3xl tracking-tighter uppercase leading-none whitespace-nowrap">
              Курчатовский класс
            </p>
            <p className="text-[10px] text-blue-300/40 tracking-[0.4em] font-black uppercase mt-2">
              Экологический проект
            </p>
          </div>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
              <p className="text-white font-black text-xl uppercase tracking-tight italic whitespace-nowrap">
                Казанцева Яна
              </p>
              <div className="w-0.5 h-6 bg-blue-500/50" />
              <p className="text-blue-400 font-black text-xl uppercase whitespace-nowrap">
                7 «А» класс
              </p>
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* карусель */}
      <main className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-x-0 z-50 flex justify-between items-center px-4 md:px-12 pointer-events-none">
          <Button
            isIconOnly
            radius="full"
            variant="bordered"
            className="pointer-events-auto border-white/10 bg-white/5 hover:bg-blue-600/40 w-20 h-20 backdrop-blur-2xl transition-all shadow-2xl cursor-pointer group"
            onClick={() => move('prev')}
          >
            <ChevronLeft
              size={44}
              className="text-blue-400 transition-colors group-hover:text-white"
            />
          </Button>

          <Button
            isIconOnly
            radius="full"
            variant="bordered"
            className="pointer-events-auto border-white/10 bg-white/5 hover:bg-blue-600/40 w-20 h-20 backdrop-blur-2xl transition-all shadow-2xl cursor-pointer group"
            onClick={() => move('next')}
          >
            <ChevronRight
              size={44}
              className="text-blue-400 transition-colors group-hover:text-white"
            />
          </Button>
        </div>

        <div className="relative flex items-center justify-center w-full h-full">
          <AnimatePresence mode="popLayout">
            {slides.map((s, i) => {
              let offset = i - active;
              if (offset < -slides.length / 2) offset += slides.length;
              if (offset > slides.length / 2) offset -= slides.length;

              const isCenter = i === active;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={s.id}
                  initial={false}
                  animate={{
                    x: offset * 420,
                    scale: isCenter ? 1.05 : 0.7,
                    opacity: isCenter ? 1 : 0.25,
                    zIndex: isCenter ? 40 : 20,
                    filter: isCenter ? 'blur(0px)' : 'blur(8px)',
                    rotateY: offset * 15,
                  }}
                  transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                  className="absolute"
                >
                  <Card
                    className={`w-75 md:w-110 h-130 border-none 
                      ${isCenter ? 'bg-slate-800/70 shadow-[0_0_100px_-20px_rgba(59,130,246,0.5)]' : 'bg-slate-900/40'}
                      backdrop-blur-3xl ring-1 ring-white/10`}
                  >
                    <CardHeader className="flex flex-col items-start gap-5 pt-12 px-10">
                      <Chip
                        color={s.color}
                        variant="shadow"
                        size="sm"
                        className="font-bold uppercase tracking-widest px-4"
                      >
                        {s.subject}
                      </Chip>
                      <h2 className="text-4xl font-black text-white leading-[0.85] uppercase tracking-tighter italic">
                        {s.title}
                      </h2>
                    </CardHeader>
                    <CardBody className="flex flex-col justify-center items-center text-center gap-12 px-10 pb-20">
                      <motion.div
                        animate={isCenter ? { y: [0, -15, 0] } : {}}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="text-blue-400 p-9 rounded-[3rem] bg-linear-to-br from-blue-500/20 to-transparent ring-1 ring-blue-500/30 shadow-2xl"
                      >
                        {s.icon}
                      </motion.div>
                      <p className="text-blue-50/90 text-2xl font-light leading-relaxed tracking-tight italic">
                        «{s.text}»
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>

      <footer className="h-24 flex flex-col items-center justify-center bg-black/40 border-t border-white/5 backdrop-blur-3xl shrink-0 z-50">
        <div className="flex gap-3 mb-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-700 rounded-full 
                ${active === i ? 'w-14 bg-blue-500' : 'w-3 bg-white/10 hover:bg-white/40'}`}
            />
          ))}
        </div>
        <p className="text-[14px] text-white/30 font-black tracking-[0.6em] uppercase">
          Калуга 2025-2026
        </p>
      </footer>
    </div>
  );
}
