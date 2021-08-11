interface Emoji {
  readonly emoji: any;
  readonly code: any;
  readonly description: any;
  readonly description_zh_cn: any;
}
let Gitmoji: Array<Emoji> = [
  {
    emoji: "🎨",
    code: ":art:",
    description: "Improve structure / format of the code",
    description_zh_cn: "改进项目结构/代码格式",
  },
  {
    emoji: "⚡️",
    code: ":zap:",
    description: "Improve performance",
    description_zh_cn: "提高性能",
  },
  {
    emoji: "🔥",
    code: ":fire:",
    description: "Remove code or files",
    description_zh_cn: "删除代码或文件",
  },
  {
    emoji: "🐛",
    code: ":bug:",
    description: "Fix a bug",
    description_zh_cn: "修复 BUG",
  },
  {
    emoji: "🚑",
    code: ":ambulance:",
    description: "Critical hotfix",
    description_zh_cn: "紧急热修复",
  },
  {
    emoji: "✨",
    code: ":sparkles:",
    description: "Introduce new features",
    description_zh_cn: "引入新特性",
  },
  {
    emoji: "📝",
    code: ":memo:",
    description: "Add or update documentation",
    description_zh_cn: "添加或更新文件",
  },
  {
    emoji: "🚀",
    code: ":rocket:",
    description: "Deploy stuff",
    description_zh_cn: "部署项目",
  },
  {
    emoji: "💄",
    code: ":lipstick:",
    description: "Add or update the UI and style files",
    description_zh_cn: "新增或更新 UI 样式文件",
  },
  {
    emoji: "🎉",
    code: ":tada:",
    description: "Begin a project",
    description_zh_cn: "初次提交",
  },
  {
    emoji: "✅",
    code: ":white_check_mark:",
    description: "Add, update, or pass tests",
    description_zh_cn: "添加、更新或通过测试",
  },
  {
    emoji: "🔒️",
    code: ":lock:",
    description: "Fix security issues",
    description_zh_cn: "修复安全问题",
  },
  {
    emoji: "🔖",
    code: ":bookmark:",
    description: "Release / Version tags",
    description_zh_cn: "Release / Version 标签",
  },
  {
    emoji: "🚨",
    code: ":rotating_light:",
    description: "Fix compiler / linter warnings",
    description_zh_cn: "修复编译器 / 链接器警告",
  },
  {
    emoji: "🚧",
    code: ":construction:",
    description: "Work in progress",
    description_zh_cn: "进行中的工作",
  },
  {
    emoji: "💚",
    code: ":green_heart:",
    description: "Fix CI Build",
    description_zh_cn: "修复 CI 构建",
  },
  {
    emoji: "⬇️",
    code: ":arrow_down:",
    description: "Downgrade dependencies",
    description_zh_cn: "降级依赖版本",
  },
  {
    emoji: "⬆️",
    code: ":arrow_up:",
    description: "Upgrade dependencies",
    description_zh_cn: "升级依赖版本",
  },
  {
    emoji: "📌",
    code: ":pushpin:",
    description: "Pin dependencies to specific versions",
    description_zh_cn: "将依赖设定为指定版本",
  },
  {
    emoji: "👷",
    code: ":construction_worker:",
    description: "Add or update CI build system",
    description_zh_cn: "新增或更新 CI 构建系统",
  },
  {
    emoji: "📈",
    code: ":chart_with_upwards_trend:",
    description: "Add or update analytics or track code",
    description_zh_cn: "新增或更新分析或跟踪代码",
  },
  {
    emoji: "♻️",
    code: ":recycle:",
    description: "Refactor code",
    description_zh_cn: "重构代码",
  },
  {
    emoji: "➕",
    code: ":heavy_plus_sign:",
    description: "Add a dependency",
    description_zh_cn: "添加依赖",
  },
  {
    emoji: "➖",
    code: ":heavy_minus_sign:",
    description: "Remove a dependency",
    description_zh_cn: "移除依赖",
  },
  {
    emoji: "🔧",
    code: ":wrench:",
    description: "Add or update configuration files",
    description_zh_cn: "新增或更新配置文件",
  },
  {
    emoji: "🔨",
    code: ":hammer:",
    description: "Add or update development scripts",
    description_zh_cn: "新增或更新开发脚本",
  },
  {
    emoji: "🌐",
    code: ":globe_with_meridians:",
    description: "Internationalization and localization",
    description_zh_cn: "国际化和本地化 i18n",
  },
  {
    emoji: "✏️",
    code: ":pencil2:",
    description: "Fix typos",
    description_zh_cn: "修复拼写错误",
  },
  {
    emoji: "💩",
    code: ":poop:",
    description: "Write bad code that needs to be improved",
    description_zh_cn: "写不好的代码，需要改进",
  },
  {
    emoji: "⏪",
    code: ":rewind:",
    description: "Revert changes",
    description_zh_cn: "还原修改",
  },
  {
    emoji: "🔀",
    code: ":twisted_rightwards_arrows:",
    description: "Merge branches",
    description_zh_cn: "合并分支",
  },
  {
    emoji: "📦",
    code: ":package:",
    description: "Add or update compiled files or packages",
    description_zh_cn: "新增或更新已编译的文件或包",
  },
  {
    emoji: "👽️",
    code: ":alien:",
    description: "Update code due to external API changes",
    description_zh_cn: "由于外部API变化而更新代码",
  },
  {
    emoji: "🚚",
    code: ":truck:",
    description: "Move or rename resources (e.g.: files, paths, routes)",
    description_zh_cn: "移动或重命名资源",
  },
  {
    emoji: "📄",
    code: ":page_facing_up:",
    description: "Add or update license",
    description_zh_cn: "新增或更新 License",
  },
  {
    emoji: "💥",
    code: ":boom:",
    description: "Introduce breaking changes",
    description_zh_cn: "引入重大改变",
  },
  {
    emoji: "🍱",
    code: ":bento:",
    description: "Add or update assets",
    description_zh_cn: "新增或更新资源",
  },
  {
    emoji: "♿️",
    code: ":wheelchair:",
    description: "Improve accessibility",
    description_zh_cn: "改善无障碍环境",
  },
  {
    emoji: "💡",
    code: ":bulb:",
    description: "Add or update comments in source code",
    description_zh_cn: "在源代码中添加或更新注释",
  },
  {
    emoji: "🍻",
    code: ":beers:",
    description: "Write code drunkenly",
    description_zh_cn: "醉醺醺的写代码",
  },
  {
    emoji: "💬",
    code: ":speech_balloon:",
    description: "Add or update text and literals",
    description_zh_cn: "新增或更新文本和文字",
  },
  {
    emoji: "🗃️",
    code: ":card_file_box:",
    description: "Perform database related changes",
    description_zh_cn: "执行与数据库相关的更改",
  },
  {
    emoji: "🔊",
    code: ":loud_sound:",
    description: "Add or update logs",
    description_zh_cn: "新增或更新日志",
  },
  {
    emoji: "🔇",
    code: ":mute:",
    description: "Remove logs",
    description_zh_cn: "删除日志",
  },
  {
    emoji: "👥",
    code: ":busts_in_silhouette:",
    description: "Add or update contributor(s)",
    description_zh_cn: "新增或更新贡献者",
  },
  {
    emoji: "🚸",
    code: ":children_crossing:",
    description: "Improve user experience / usability",
    description_zh_cn: "提高用户体验 / 可用性",
  },
  {
    emoji: "🏗️",
    code: ":building_construction:",
    description: "Make architectural changes",
    description_zh_cn: "进行架构更改",
  },
  {
    emoji: "📱",
    code: ":iphone:",
    description: "Work on responsive design",
    description_zh_cn: "响应式设计的工作",
  },
  {
    emoji: "🤡",
    code: ":clown_face:",
    description: "Mock things",
    description_zh_cn: "进行 mock 测试",
  },
  {
    emoji: "🥚",
    code: ":egg:",
    description: "Add or update an easter egg",
    description_zh_cn: "新增或更新一个彩蛋",
  },
  {
    emoji: "🙈",
    code: ":see_no_evil:",
    description: "Add or update a .gitignore file",
    description_zh_cn: "新增或更新 .gitignore 文件",
  },
  {
    emoji: "📸",
    code: ":camera_flash:",
    description: "Add or update snapshots",
    description_zh_cn: "新增或更新快照",
  },
  {
    emoji: "⚗️",
    code: ":alembic:",
    description: "Perform experiments",
    description_zh_cn: "试验新功能",
  },
  {
    emoji: "🔍",
    code: ":mag:",
    description: "Improve SEO",
    description_zh_cn: "改善 SEO",
  },
  {
    emoji: "🏷️",
    code: ":label:",
    description: "Add or update types",
    description_zh_cn: "新增或更新类型",
  },
  {
    emoji: "🌱",
    code: ":seedling:",
    description: "Add or update seed files",
    description_zh_cn: "新增或更新 SEED 文件",
  },
  {
    emoji: "🚩",
    code: ":triangular_flag_on_post:",
    description: "Add, update, or remove feature flags",
    description_zh_cn: "添加、更新或删除特性标志",
  },
  {
    emoji: "🥅",
    code: ":goal_net:",
    description: "Catch errors",
    description_zh_cn: "捕获异常",
  },
  {
    emoji: "💫",
    code: ":dizzy:",
    description: "Add or update animations and transitions",
    description_zh_cn: "新增或更新动画和过场",
  },
  {
    emoji: "🗑️",
    code: ":wastebasket:",
    description: "Deprecate code that needs to be cleaned up",
    description_zh_cn: "需要清理的废弃代码",
  },
  {
    emoji: "🛂",
    code: ":passport_control:",
    description: "Work on code related to authorization, roles and permissions",
    description_zh_cn: "编写与授权、角色和权限有关的代码",
  },
  {
    emoji: "🩹",
    code: ":adhesive_bandage:",
    description: "Simple fix for a non-critical issue",
    description_zh_cn: "简单修复非关键性问题",
  },
  {
    emoji: "🧐",
    code: ":monocle_face:",
    description: "Data exploration / inspection",
    description_zh_cn: "数据探索 / 数据巡检",
  },
  {
    emoji: "⚰️",
    code: ":coffin:",
    description: "Remove dead code",
    description_zh_cn: "删除无效代码",
  },
  {
    emoji: "🧪",
    code: ":test_tube:",
    description: "Add a failing test",
    description_zh_cn: "添加一个失败的测试",
  },
  {
    emoji: "👔",
    code: ":necktie:",
    description: "Add or update business logic and utility functions",
    description_zh_cn: "增加或更新业务逻辑和实用功能",
  }
];
export default Gitmoji;
