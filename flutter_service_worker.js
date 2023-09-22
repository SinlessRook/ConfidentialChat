'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1679f00adfca383798733d9add5e772e",
".git/config": "a1b330284fafacfd67590b2abc78e0b9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fa95ed77906629e7a97b2717620878c3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b69cd3086a0b8ca9c00b263456a5b918",
".git/logs/refs/heads/main": "b69cd3086a0b8ca9c00b263456a5b918",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/11/7994492847494cb3be321baa8bf66d69d35700": "15a04b9d930261107fb7573120f3fe3f",
".git/objects/24/5b53cb9e8d16ac4ec4c2b3c195e29e7650a7e0": "8baac879e12b68a7f59b4ed0c7effa15",
".git/objects/2b/2f11d4888ca3415a1387760b361e57b0d721a6": "518b001cc8bf7c617485d9050aac26cc",
".git/objects/34/2824862ef747ac81fbbacf02f8f4979a53aec2": "5936be59aadf3b136fe84afcddca6727",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/8444445122130e66c2acb29f0f9cebc2e20aea": "ae0b2c164ebab0bce609f68f10fbab19",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/e550829495ae42c08471260395f36c4c41d03d": "88783818a24ba1eac612735443033056",
".git/objects/64/0b461fd16ed5a48148112027d909bd5ac1b11c": "78c54a3a0d2fa74a23c7b705667a05f0",
".git/objects/64/7777615bfe2f4f18bfd42b06932d4e875a6ba4": "63a350579920bd6ac6f14b11439d70f1",
".git/objects/71/a5a8cb1aec431d66e39999104928a5a3a3c8f2": "60b4916763dbd6df309de461c88837dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/af/09d9ad0e00871105a07c90d96d4782e590ba9c": "103be7d7f7c57b0a37fbb66cb791fe3e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e3/d61f37ff312a7c756394ed96725af48490c143": "e6122007b6c157df498bfa0143f2592a",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "3533793244e5be048a40597ccbf216b2",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c2b96867166cdf098b6bd7e593368372",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"ConfidentialChat/.git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
"ConfidentialChat/.git/config": "c96684fac7bd904644c66d5dad43800b",
"ConfidentialChat/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"ConfidentialChat/.git/FETCH_HEAD": "41f1e3587092f2aa13d17f1f7f60ce64",
"ConfidentialChat/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"ConfidentialChat/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"ConfidentialChat/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"ConfidentialChat/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"ConfidentialChat/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"ConfidentialChat/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"ConfidentialChat/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"ConfidentialChat/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"ConfidentialChat/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"ConfidentialChat/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"ConfidentialChat/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"ConfidentialChat/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"ConfidentialChat/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"ConfidentialChat/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"ConfidentialChat/.git/index": "ed044878aa9bac12cba603629c803baa",
"ConfidentialChat/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"ConfidentialChat/.git/logs/HEAD": "3fdced6fb76c03021ade7b4c75a9584c",
"ConfidentialChat/.git/logs/refs/heads/main": "3fdced6fb76c03021ade7b4c75a9584c",
"ConfidentialChat/.git/logs/refs/remotes/origin/HEAD": "ac87bf9ece4cf8b6987d8fd321f7fdbf",
"ConfidentialChat/.git/logs/refs/remotes/origin/main": "1090ad1459da44fb8af64cfa15fcf5f9",
"ConfidentialChat/.git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
"ConfidentialChat/.git/objects/02/644cd59e7e7bda688e3070038e223225900a99": "25553e43c9b1506ad8f9e6c0cb2a7a75",
"ConfidentialChat/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"ConfidentialChat/.git/objects/06/0a5bc6b7c126945f132bb6d1c7768596344d3e": "ac56131626c8eb4c9f33c2a6069de4e1",
"ConfidentialChat/.git/objects/0a/623e4807d328b2f8dc36159f15c6734d43a06b": "339f301d4be2cbab7384622480401b24",
"ConfidentialChat/.git/objects/11/7994492847494cb3be321baa8bf66d69d35700": "15a04b9d930261107fb7573120f3fe3f",
"ConfidentialChat/.git/objects/12/02ebd2b34da1b16b728bdf0c80e6455ce87053": "3d4025073361fef46f41e97d405237c8",
"ConfidentialChat/.git/objects/20/59119807bfd4ce09004068eba19f0b0968a060": "205df7b69f5dd743ddae4e74802078af",
"ConfidentialChat/.git/objects/29/07eb675c0f28c8bcf40674c92345804259afd4": "0f204f23eba83afdeee42ed2433f7473",
"ConfidentialChat/.git/objects/2a/bb3ba6f3bf182d4c0f0e2a89479fdd3d655c10": "7961de4277dcb5632ec826a60f7b0706",
"ConfidentialChat/.git/objects/2b/2f11d4888ca3415a1387760b361e57b0d721a6": "518b001cc8bf7c617485d9050aac26cc",
"ConfidentialChat/.git/objects/2c/f0ce74d383f5b28635145b30687d5c0309ac66": "5e319dca79c946235070eb461ad977c5",
"ConfidentialChat/.git/objects/34/642f2d71855074ad1abf8cef9248784ff27364": "b81341f2465b9cabf5f82f43a1e045bf",
"ConfidentialChat/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"ConfidentialChat/.git/objects/36/80008122f80ef934ed22da80db2d87e00fdb07": "91fc12263b67c558260a203dd8f7c6ec",
"ConfidentialChat/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"ConfidentialChat/.git/objects/48/ece40b2ceef3d6f9d7bd13a0a50cb19556c8c3": "640d82debb7944580782c4637c5e16ad",
"ConfidentialChat/.git/objects/4a/8444445122130e66c2acb29f0f9cebc2e20aea": "ae0b2c164ebab0bce609f68f10fbab19",
"ConfidentialChat/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"ConfidentialChat/.git/objects/55/9bb569dc13f4a985c9fef9d3018def28bb72a2": "fef55f92a81c349a785a3ced915176db",
"ConfidentialChat/.git/objects/57/2462f36bb9299539a044b058505afc441aae3c": "14a0d0aeb362996d6e50fd43dce326fb",
"ConfidentialChat/.git/objects/57/e550829495ae42c08471260395f36c4c41d03d": "88783818a24ba1eac612735443033056",
"ConfidentialChat/.git/objects/5b/fe41caa61c561b29eaca7c14d7d5ea581a24c2": "dc53f9fa80c8f4e76d6a050bf0dc708f",
"ConfidentialChat/.git/objects/61/73ac0a599a4994cf1bb61b5dd5c0ace9d90e3a": "eb0295a12c4cb9fc18afcaf05a5277ef",
"ConfidentialChat/.git/objects/64/7777615bfe2f4f18bfd42b06932d4e875a6ba4": "63a350579920bd6ac6f14b11439d70f1",
"ConfidentialChat/.git/objects/70/ceb5d1dd75b8567f3148f91befcd2224ae1e32": "07ebfb76c051ac23002c291ed99fa297",
"ConfidentialChat/.git/objects/71/a5a8cb1aec431d66e39999104928a5a3a3c8f2": "60b4916763dbd6df309de461c88837dc",
"ConfidentialChat/.git/objects/83/77f53364abea97bff2809834aa5de715a9c765": "d6085871dec652ad7230f36b3f3817cd",
"ConfidentialChat/.git/objects/84/e91b526b5b8665c5b7845ff6bb514e33a6166c": "aee0c0ef7737dc29aca8f06071456b33",
"ConfidentialChat/.git/objects/85/b947f341193f60eebdbdc0ac49daf722ecf53b": "16ba4671d017826c4f2e9f6a7d7f1c5c",
"ConfidentialChat/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"ConfidentialChat/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"ConfidentialChat/.git/objects/8c/8ce8deea7921b87f3a92a40c819280a0e6cddc": "be60698c33ccfd8b6b7075ce2f181e53",
"ConfidentialChat/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"ConfidentialChat/.git/objects/93/b79be07f7f31d0d214c318039b9de6abca9ad0": "b9591d1ce65cbfd0fa8b1335a263ea38",
"ConfidentialChat/.git/objects/97/224d3b3e7f3fa6258e700297c79b0e32fdd314": "bb2cb234c1545e2e3134c9b720372e0e",
"ConfidentialChat/.git/objects/9c/27341c002b10fd68976bf6062bbecb9af721de": "34f8310fe877dd6ad278f2ef4e3f1067",
"ConfidentialChat/.git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
"ConfidentialChat/.git/objects/a3/08e00ca671ac898141d0f07e708bc74e498b0c": "c67c330fb8541aff403a690f261465f9",
"ConfidentialChat/.git/objects/a6/727baaafbbc8957b6faec58b20bc43f0c76c41": "d36ede8c910e57f6b4257b126c11ff8d",
"ConfidentialChat/.git/objects/ac/16b903c0b47f340b6054ad4b6e604bcd8cf49f": "de3b6d945126fbaf5262db841f38b026",
"ConfidentialChat/.git/objects/ac/3ae7fa4e389dbb82212166b3e5240a3911a3eb": "636cc0e3ffb42f381f3fc767cb74e57d",
"ConfidentialChat/.git/objects/af/09d9ad0e00871105a07c90d96d4782e590ba9c": "103be7d7f7c57b0a37fbb66cb791fe3e",
"ConfidentialChat/.git/objects/b0/84599f7a36d9a42e483b8cee8a82e4fe1837dd": "cc2fa5f7cc9ea88eb7c11b6211dec666",
"ConfidentialChat/.git/objects/b4/c9316161b0043056adc5cba73c3434ec967730": "806ea0e630b6835df0499b4066841d08",
"ConfidentialChat/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"ConfidentialChat/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"ConfidentialChat/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"ConfidentialChat/.git/objects/c0/8604402dd0b620db6d0965b75b4bc97473ca5a": "a8837f4c130b39e10489567833db025b",
"ConfidentialChat/.git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
"ConfidentialChat/.git/objects/c2/f122aa90dd45476a604b9ee3ef5a6eb4cd4667": "9c6c1e289b705a68c597423b2f0d2213",
"ConfidentialChat/.git/objects/c4/a655d29e0b977a1a9bd949c60cfb7018487bee": "6be65928619f00c3e0e6b48898c5f699",
"ConfidentialChat/.git/objects/cb/38c06444531168fc8b9a2bb1f3a348a0f9c51f": "850010b8805f0a1315ec7d6210ae694b",
"ConfidentialChat/.git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
"ConfidentialChat/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"ConfidentialChat/.git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
"ConfidentialChat/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"ConfidentialChat/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"ConfidentialChat/.git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
"ConfidentialChat/.git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
"ConfidentialChat/.git/objects/e1/53b9eae750cdf012fda86c24b06e4b2ec525a0": "7071fa75e672341150f89677c29924fb",
"ConfidentialChat/.git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
"ConfidentialChat/.git/objects/e3/d61f37ff312a7c756394ed96725af48490c143": "e6122007b6c157df498bfa0143f2592a",
"ConfidentialChat/.git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
"ConfidentialChat/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"ConfidentialChat/.git/objects/e8/8a5887b67439de12dbb52d0f65bf02ebb3c6f7": "4166dc460221bc5d04fd7c9c8ad30aac",
"ConfidentialChat/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"ConfidentialChat/.git/objects/f2/9612b8c13e6172288881e67b4e93785f6b1325": "87e2f1f8a39b65c275fd9189a16461fc",
"ConfidentialChat/.git/objects/f4/1249ee991291274d569534f390963078f835cd": "357e055d0a4633e8a9e7e0f70480ab39",
"ConfidentialChat/.git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
"ConfidentialChat/.git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
"ConfidentialChat/.git/ORIG_HEAD": "183d1ca9aa443eefa62c210ad1ad0c80",
"ConfidentialChat/.git/refs/heads/main": "156431b65dc2bb5f503b6ca85e4e9377",
"ConfidentialChat/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"ConfidentialChat/.git/refs/remotes/origin/main": "156431b65dc2bb5f503b6ca85e4e9377",
"ConfidentialChat/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"ConfidentialChat/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"ConfidentialChat/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"ConfidentialChat/assets/fonts/MaterialIcons-Regular.otf": "c2b96867166cdf098b6bd7e593368372",
"ConfidentialChat/assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"ConfidentialChat/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"ConfidentialChat/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"ConfidentialChat/canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"ConfidentialChat/canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"ConfidentialChat/canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"ConfidentialChat/canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"ConfidentialChat/canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"ConfidentialChat/canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"ConfidentialChat/canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"ConfidentialChat/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"ConfidentialChat/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"ConfidentialChat/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"ConfidentialChat/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"ConfidentialChat/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"ConfidentialChat/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"ConfidentialChat/index.html": "45b1a62bb170a3fb88c4dbd7f88ed6c1",
"/": "916f4742457853d3de4e3ed90aef646e",
"ConfidentialChat/main.dart.js": "48ec72c42314b0fe7e0ffcaf4cee62af",
"ConfidentialChat/manifest.json": "a8f91a58ab600219d9472601bb755b35",
"ConfidentialChat/README.md": "ec4b0eeb8f674f54bb6a4bd82c25027c",
"ConfidentialChat/version.json": "a38098eb50d63e1fe5bd3dd8874c0f13",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "916f4742457853d3de4e3ed90aef646e",
"main.dart.js": "48ec72c42314b0fe7e0ffcaf4cee62af",
"manifest.json": "a8f91a58ab600219d9472601bb755b35",
"version.json": "a38098eb50d63e1fe5bd3dd8874c0f13"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
