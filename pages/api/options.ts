export const Moods = {
  professional: {
    title: "Professional",
    command: "professional",
  },
  easygoing: {
    title: "Easy-going",
    command: "easy-going",
  },
  funny: {
    title: "Funny",
    command: "funny",
  },
  conservative: {
    title: "Conservative",
    command: "conservative",
  },
  humble: {
    title: "Humble",
    command: "humble",
  },
  confident: {
    title: "Confident",
    command: "confident",
  },
};

export const Options = {
  default: {
    title: "Default",
    command: "Revise this text for my CV",
    temperature: 0.4,
  },
  shorten: {
    title: "Shorten",
    command: "Shorten this text for my CV",
    temperature: 0.4,
  },
  lengthen: {
    title: "Lengthen",
    command: "Write this text longer for my CV",
    temperature: 0.4,
  },
  moreCreative: {
    title: "More Creative",
    helpText: "This option will generate a more creative text",
    command: "Revise this text for my CV",
    temperature: 0.9,
  },
  lessCreative: {
    title: "Less Creative",
    helpText: "This option will a more dry text",
    command: "Revise this text for my CV",
    temperature: 0,
  },
};

export default async function (req, res) {
  return res.status(200).json({
    options: Options,
    moods: Moods,
  });
}
