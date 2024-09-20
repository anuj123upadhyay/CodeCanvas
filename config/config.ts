import { CodeSnippetsProps } from "@/components/EditorComponent";

export const languageOptions = [
    {
        "language": "javascript",
        "version": "18.15.0",
        "aliases": [
          "node-javascript",
          "node-js",
          "javascript",
          "js"
        ],
        "runtime": "node"
      },
    {
        "language": "typescript",
        "version": "1.32.3",
        "aliases": [
          "deno",
          "deno-ts"
        ],
        "runtime": "deno"
      },
      {
        "language": "python",
        "version": "3.10.0",
        "aliases": [
          "py",
          "py3",
          "python3",
          "python3.10"
        ]
      },
      {
        "language": "php",
        "version": "8.2.3",
        "aliases": []
      },
      {
        "language": "go",
        "version": "1.16.2",
        "aliases": [
          "go",
          "golang"
        ]
      },
      {
        "language": "c++",
        "version": "10.2.0",
        "aliases": [
          "cpp",
          "g++"
        ],
        "runtime": "gcc"
      },
      {
        "language": "c",
        "version": "10.2.0",
        "aliases": [
          "gcc"
        ],
        "runtime": "gcc"
      },
      {
        "language": "csharp",
        "version": "6.12.0",
        "aliases": [
          "mono",
          "mono-csharp",
          "mono-c#",
          "mono-cs",
          "c#",
          "cs"
        ],
        "runtime": "mono"
      },
      {
        "language": "emojicode",
        "version": "1.0.2",
        "aliases": [
          "emojic"
        ]
      },
      {
        "language": "dart",
        "version": "2.19.6",
        "aliases": []
      },
      {
        "language": "bash",
        "version": "5.2.0",
        "aliases": [
          "sh"
        ]
      },
      {
        "language": "matl",
        "version": "22.5.0",
        "aliases": []
      },
      {
        "language": "java",
        "version": "15.0.2",
        "aliases": []
      },
      {
        "language": "php",
        "version": "8.2.3",
        "aliases": []
      },
      {
        "language": "ruby",
        "version": "3.0.1",
        "aliases": [
          "ruby3",
          "rb"
        ]
      },
      {
        "language": "rust",
        "version": "1.68.2",
        "aliases": [
          "rs"
        ]
      },
      {
        "language": "scala",
        "version": "3.2.2",
        "aliases": [
          "sc"
        ]
      },
      {
        "language": "kotlin",
        "version": "1.8.20",
        "aliases": [
          "kt"
        ]
      },
]


export const codeSnippets: CodeSnippetsProps  = {
  "javascript": "function sum(a, b) {\n  return a + b;\n}\nconsole.log(sum(5, 3));",
    "typescript": "function sum(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(sum(5, 3));",
    "python": "def sum(a, b):\n  return a + b\nprint(sum(5, 3))",
    "php": "<?php\nfunction sum($a, $b) {\n  return $a + $b;\n}\necho sum(5, 3);\n?>",
    "go": "package main\nimport \"fmt\"\nfunc sum(a int, b int) int {\n  return a + b\n}\nfunc main() {\n  fmt.Println(sum(5, 3))\n}",
    "c++": "#include <iostream>\nusing namespace std;\nint sum(int a, int b) {\n  return a + b;\n}\nint main() {\n  cout << sum(5, 3) << endl;\n  return 0;\n}",
    "c": "#include <stdio.h>\nint sum(int a, int b) {\n  return a + b;\n}\nint main() {\n  printf(\"%d\", sum(5, 3));\n  return 0;\n}",
    "csharp": "using System;\nclass Program {\n  static int Sum(int a, int b) {\n    return a + b;\n  }\n  static void Main() {\n    Console.WriteLine(Sum(5, 3));\n  }\n}",
    "emojicode": "🏁 🍇\n🍦 a 🍨 5\n🍦 b 🍨 3\n😀 sum 🍇 🍎 a ➕ b 🍉 🍉🏁",
    "dart": "int sum(int a, int b) {\n  return a + b;\n}\nvoid main() {\n  print(sum(5, 3));\n}",
    "bash": "sum() {\n  echo $(($1 + $2))\n}\nsum 5 3",
    "matl": "5 3 +",
    "java": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(sum(5, 3));\n  }\n  public static int sum(int a, int b) {\n    return a + b;\n  }\n}",
    "ruby": "def sum(a, b)\n  a + b\nend\nputs sum(5, 3)",
    "rust": "fn sum(a: i32, b: i32) -> i32 {\n  a + b\n}\nfn main() {\n  println!(\"{}\", sum(5, 3));\n}",
    "scala": "object Main extends App {\n  def sum(a: Int, b: Int): Int = a + b\n  println(sum(5, 3))\n}",
    "kotlin": "fun sum(a: Int, b: Int): Int {\n  return a + b\n}\nfun main() {\n  println(sum(5, 3))\n}"
};
