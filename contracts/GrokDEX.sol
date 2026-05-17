// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GrokDEX {
    IERC20 public rakz;
    IERC20 public stakz;
    IERC20 public btcPro;

    constructor(address _rakz, address _stakz, address _btcPro) {
        rakz = IERC20(_rakz);
        stakz = IERC20(_stakz);
        btcPro = IERC20(_btcPro);
    }

    // Simple swap example: BTC-Pro → Rakz
    function swapProForRakz(uint256 amount) external {
        btcPro.transferFrom(msg.sender, address(this), amount);
        rakz.transfer(msg.sender, amount);
    }

    // Simple swap example: Stakz → BTC-Pro
    function swapStakzForPro(uint256 amount) external {
        stakz.transferFrom(msg.sender, address(this), amount);
        btcPro.transfer(msg.sender, amount);
    }
}
